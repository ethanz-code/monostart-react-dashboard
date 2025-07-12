import React, { useId, useState } from 'react';
import { Input } from '@/components/ui/input';
import { PhoneIcon, HashIcon, LockIcon, EyeIcon, EyeOffIcon, MailIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCaptchaStore } from '@/store/useCaptchaStore';

// 手机号输入框
export function PhoneInput({
  value,
  onChange,
  error,
  placeholder = '请输入手机号',
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <div className="relative">
        <Input
          id={id}
          className="ps-17.5 h-10"
          placeholder={placeholder}
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
        />
        <div className="absolute inset-y-0 start-0 flex items-center gap-2 ps-3 pointer-events-none">
          <PhoneIcon size={16} aria-hidden="true" className="text-muted-foreground" />
          <span className="text-primary text-sm">+86</span>
        </div>
      </div>
      <div className="text-destructive text-xs mt-1 min-h-[20px]">{error || ''}</div>
    </div>
  );
}

// 验证码输入框
export function CodeInput({
  value,
  onChange,
  error,
  onSend,
  placeholder = '请输入验证码',
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
  onSend?: () => void | Promise<void>;
  placeholder?: string;
}) {
  const id = useId();
  const countdown = useCaptchaStore((s) => s.countdown);
  const setCountdown = useCaptchaStore((s) => s.setCountdown);
  const startTime = useCaptchaStore((s) => s.startTime);
  const setStartTime = useCaptchaStore((s) => s.setStartTime);
  const clear = useCaptchaStore((s) => s.clear);

  // 组件挂载时自动恢复倒计时
  React.useEffect(() => {
    if (startTime) {
      const left = 60 - Math.floor((Date.now() - startTime) / 1000);
      if (left > 0) {
        setCountdown(left);
      } else {
        clear();
      }
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    // 倒计时结束自动清理
    if (countdown === 0 && startTime) {
      clear();
    }
  }, [countdown, setCountdown, startTime, clear]);

  const handleSend = async () => {
    if (countdown > 0) return;
    setCountdown(60);
    setStartTime(Date.now());
    if (onSend) await onSend();
  };

  return (
    <div>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Input
            id={id}
            className="ps-9 h-10"
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-invalid={!!error}
          />
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <HashIcon size={16} aria-hidden="true" className="text-muted-foreground" />
          </div>
        </div>
        <Button
          variant="outline"
          className="cursor-pointer h-10"
          type="button"
          onClick={handleSend}
          disabled={countdown > 0}
        >
          {countdown > 0 ? `${countdown}s后重试` : '发送验证码'}
        </Button>
      </div>
      <div className="text-destructive text-xs mt-1 min-h-[20px]">{error || ''}</div>
    </div>
  );
}

// 邮箱输入框
export function EmailInput({
  value,
  onChange,
  error,
  placeholder = '请输入邮箱',
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <div className="relative">
        <Input
          id={id}
          className="ps-9 h-10"
          placeholder={placeholder}
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MailIcon size={16} aria-hidden="true" className="text-muted-foreground" />
        </div>
      </div>
      <div className="text-destructive text-xs mt-1 min-h-[20px]">{error || ''}</div>
    </div>
  );
}

// 密码输入框
export function PasswordInput({
  value,
  onChange,
  error,
  placeholder = '请输入密码',
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
}) {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="relative">
        <Input
          id={id}
          className="ps-9 pe-9 h-10"
          placeholder={placeholder}
          type={isVisible ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <LockIcon size={16} aria-hidden="true" className="text-muted-foreground" />
        </div>
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          onClick={() => setIsVisible((v) => !v)}
          aria-label={isVisible ? '隐藏密码' : '显示密码'}
          aria-pressed={isVisible}
          aria-controls={id}
        >
          {isVisible ? (
            <EyeOffIcon size={16} aria-hidden="true" />
          ) : (
            <EyeIcon size={16} aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="text-destructive text-xs mt-1 min-h-[20px]">{error || ''}</div>
    </div>
  );
}
