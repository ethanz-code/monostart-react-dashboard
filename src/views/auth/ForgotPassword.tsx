import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router';
import AuthLayout from '@/components/layout/AuthLayout';
import { EmailInput, CodeInput } from '@/form-fields/LoginFields';
import { validateForgotPasswordForm, validateEmail } from '@/utils/validation';

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    code: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    code: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 执行表单验证
    const validationErrors = validateForgotPasswordForm(formData);
    setErrors({
      email: validationErrors.email || '',
      code: validationErrors.code || '',
    });

    // 如果有错误，停止提交
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // TODO: 重置密码逻辑
    console.log('重置密码数据:', formData);
  };

  const handleEmailChange = (value: string) => {
    setFormData((prev) => ({ ...prev, email: value }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
  };

  const handleCodeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, code: value }));
    if (errors.code) setErrors((prev) => ({ ...prev, code: '' }));
  };

  const handleSendCode = async () => {
    // 发送验证码前先验证邮箱
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: '请先输入邮箱或手机号' }));
      return;
    }

    const emailResult = validateEmail(formData.email);
    if (!emailResult.isValid) {
      setErrors((prev) => ({ ...prev, email: emailResult.message! }));
      return;
    }

    // 清除邮箱错误
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    // TODO: 发送验证码逻辑
    console.log('发送验证码到:', formData.email);
  };

  return (
    <AuthLayout maxWidth="sm">
      <div>
        <div className="mb-4">
          <h1 className="text-lg text-center font-bold mb-2">重置登录密码</h1>
          <p className="text-muted-foreground">
            请输入你注册的邮箱或手机号码用于接收验证码，我们将为你重置密码。
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <EmailInput
            value={formData.email}
            onChange={handleEmailChange}
            error={errors.email}
            placeholder="请输入邮箱 / +86 手机号"
          />

          <CodeInput
            value={formData.code}
            onChange={handleCodeChange}
            error={errors.code}
            onSend={handleSendCode}
          />
        </form>
      </div>

      <div>
        <Button type="submit" onClick={handleSubmit} className="w-full cursor-pointer" size="lg">
          下一步
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

export default ForgotPassword;
