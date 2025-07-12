import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import QRCode from 'qrcode';
import wechatIcon from '@/assets/images/wechat.svg';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router';
import { PhoneInput, CodeInput, PasswordInput } from '@/form-fields/LoginFields';
import AuthLayout from '@/views/auth/AuthLayout';
import { validateSignInForm } from '@/utils/validation';
import { RotateCw } from 'lucide-react';

// 微信二维码组件
function WeChatQRCode({ text }: { text: string }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [qrText, setQrText] = useState(text);

  useEffect(() => {
    const canvas = document.getElementById('canvas-qrcode');
    QRCode.toCanvas(canvas, qrText, {
      margin: 2,
    });
  }, [qrText]);

  useEffect(() => {
    setShowOverlay(false);
    const timer = setTimeout(
      () => {
        setShowOverlay(true);
      },
      0.5 * 60 * 1000,
    ); // 3分钟

    return () => clearTimeout(timer);
  }, [qrText]);

  const handleRefresh = () => {
    setQrText(text + '?t=' + Date.now());
    setShowOverlay(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden mb-4 relative">
      <canvas id="canvas-qrcode"></canvas>
      {showOverlay && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <button
            onClick={handleRefresh}
            className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-all duration-200 hover:scale-105"
          >
            <RotateCw className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
}

// 登录方式切换 tab
function LoginTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: 'code' | 'password';
  setActiveTab: (tab: 'code' | 'password') => void;
}) {
  return (
    <div className="flex space-x-6 mb-8 justify-center text-base">
      <button
        className={`relative font-semibold px-2 pb-1 transition-colors ${activeTab === 'code' ? 'text-primary' : 'text-muted-foreground cursor-pointer'}`}
        onClick={() => setActiveTab('code')}
      >
        验证码登录
        {activeTab === 'code' && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-primary rounded-t-[3px]" />
        )}
      </button>
      <button
        className={`relative font-semibold px-2 pb-1 transition-colors ${activeTab === 'password' ? 'text-primary' : 'text-muted-foreground cursor-pointer'}`}
        onClick={() => setActiveTab('password')}
      >
        密码登录
        {activeTab === 'password' && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-primary rounded-t-[3px]" />
        )}
      </button>
    </div>
  );
}

// 移除 CodeLoginForm 和 PasswordLoginForm 组件

const Login: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'code' | 'password'>('code');
  const [errorMsg, setErrorMsg] = useState<{ phone?: string; code?: string; password?: string }>(
    {},
  );

  const handleTabChange = (tab: 'code' | 'password') => {
    setActiveTab(tab);
    setErrorMsg({});
  };

  // 校验函数
  function validate() {
    return validateSignInForm(
      {
        phone,
        code: activeTab === 'code' ? code : undefined,
        password: activeTab === 'password' ? password : undefined,
      },
      activeTab,
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    setErrorMsg({
      phone: errors.phone || '',
      code: errors.code || '',
      password: errors.password || '',
    });
    if (Object.keys(errors).length > 0) return;
    // TODO: 登录逻辑
  }

  const sideContent = (
    <>
      <WeChatQRCode text="https://www.npmjs.com/package/qrcode#createtext-options" />
      <div className="flex items-center gap-1 mt-2">
        <img src={wechatIcon} width={20} />
        <span className="text-foreground text-sm">微信扫码登录</span>
      </div>
    </>
  );

  return (
    <AuthLayout sideContent={sideContent}>
      <div>
        <LoginTabs activeTab={activeTab} setActiveTab={handleTabChange} />
        <form onSubmit={handleSubmit} autoComplete="off">
          {/* 顶部小提示 */}
          <div className="text-xs text-muted-foreground mb-2">
            你所在地区仅支持 手机号 / 微信 / 邮箱 登录
          </div>
          {activeTab === 'code' ? (
            <>
              <PhoneInput value={phone} onChange={setPhone} error={errorMsg.phone} />
              <CodeInput value={code} onChange={setCode} error={errorMsg.code} onSend={() => {}} />
            </>
          ) : (
            <>
              <PhoneInput value={phone} onChange={setPhone} error={errorMsg.phone} />
              <PasswordInput value={password} onChange={setPassword} error={errorMsg.password} />
            </>
          )}
          {/* 错误提示 */}
          {/* 删除原有的全局错误提示，只保留每个 input 下的 */}
          <div className="text-xs text-muted-foreground leading-relaxed">
            注册登录即代表已阅读并同意我们的
            <a href="#" className="text-primary underline mx-1">
              开放平台协议
            </a>
            <a href="#" className="text-primary underline">
              隐私政策
            </a>
            <span className={cn('block', activeTab === 'code' ? '' : 'opacity-0')}>
              ，未注册的手机号将自动注册
            </span>
          </div>
          <Button size="lg" className="w-full mt-4 font-semibold cursor-pointer" type="submit">
            登录
          </Button>
        </form>
      </div>

      {/* 忘记密码/立即注册始终渲染，保证高度一致 */}
      <div
        className={cn(
          'justify-between pt-2',
          activeTab === 'password' ? 'flex' : 'flex opacity-0 pointer-events-none',
        )}
      >
        <NavLink to="/forgot_password" className="text-sm text-primary hover:underline">
          忘记密码
        </NavLink>
        <NavLink to="/sign_up" className="text-sm text-primary hover:underline">
          立即注册
        </NavLink>
      </div>
    </AuthLayout>
  );
};

export default Login;
