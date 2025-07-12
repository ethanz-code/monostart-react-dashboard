import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router';
import AuthLayout from '@/views/auth/AuthLayout';
import { PhoneInput, CodeInput, PasswordInput } from '@/form-fields/LoginFields';
import { validateSignUpForm } from '@/utils/validation';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    confirmPassword: '',
    code: '',
  });

  const [errors, setErrors] = useState<{
    phone: string;
    password: string;
    confirmPassword: string;
    code: string;
  }>({
    phone: '',
    password: '',
    confirmPassword: '',
    code: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 执行表单验证
    const validationErrors = validateSignUpForm(formData);
    setErrors({
      phone: validationErrors.phone || '',
      password: validationErrors.password || '',
      confirmPassword: validationErrors.confirmPassword || '',
      code: validationErrors.code || '',
    });

    // 如果有错误，停止提交
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // TODO: 注册逻辑
    console.log('注册数据:', formData);
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, password: value }));
    if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, confirmPassword: value }));
    if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
  };

  const handleCodeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, code: value }));
    if (errors.code) setErrors((prev) => ({ ...prev, code: '' }));
  };

  const handleSendCode = async () => {
    // 发送验证码前先验证手机号
    if (!formData.phone) {
      setErrors((prev) => ({ ...prev, phone: '请先输入手机号' }));
      return;
    }

    if (!/^1\d{10}$/.test(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: '请输入正确的中国大陆手机号' }));
      return;
    }

    // 清除手机号错误
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }

    // TODO: 发送验证码逻辑
    console.log('发送验证码到:', formData.phone);
  };

  return (
    <AuthLayout maxWidth="sm">
      <div>
        <div className="mb-4">
          <h1 className="text-lg text-center font-bold mb-2">注册账号</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <PhoneInput value={formData.phone} onChange={handlePhoneChange} error={errors.phone} />

          <PasswordInput
            value={formData.password}
            onChange={handlePasswordChange}
            error={errors.password}
          />

          <PasswordInput
            value={formData.confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={errors.confirmPassword}
            placeholder="请再次输入密码"
          />

          <CodeInput
            value={formData.code}
            onChange={handleCodeChange}
            error={errors.code}
            onSend={handleSendCode}
          />

          <div className="text-xs text-muted-foreground leading-relaxed mb-4">
            注册即代表已阅读并同意我们的
            <a href="#" className="text-primary underline mx-1">
              服务协议
            </a>
            和
            <a href="#" className="text-primary underline mx-1">
              隐私政策
            </a>
          </div>
        </form>
      </div>

      <div className="text-center">
        <Button type="submit" onClick={handleSubmit} className="w-full cursor-pointer" size="lg">
          创建账户
        </Button>
        <NavLink to="/sign_in">
          <Button
            type="button"
            variant="link"
            className="w-full cursor-pointer hover:no-underline"
            size="lg"
          >
            返回登录
          </Button>
        </NavLink>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
