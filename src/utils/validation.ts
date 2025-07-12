// 验证工具函数

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

// 邮箱验证
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, message: '邮箱不能为空' };
  }

  // 检查是否是手机号格式
  if (/^1\d{10}$/.test(email)) {
    return { isValid: true }; // 手机号格式也可以
  }

  // 检查邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: '请输入正确的邮箱格式或手机号' };
  }

  return { isValid: true };
}

// 手机号验证
export function validatePhone(phone: string): ValidationResult {
  if (!phone) {
    return { isValid: false, message: '手机号不能为空' };
  }
  if (!/^1\d{10}$/.test(phone)) {
    return { isValid: false, message: '请输入正确的中国大陆手机号' };
  }
  return { isValid: true };
}

// 密码验证 - 最低要求：字母+数字，最高允许：特殊字符+小写+大写+数字
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, message: '密码不能为空' };
  }

  if (password.length < 6) {
    return { isValid: false, message: '密码长度至少6位' };
  }

  if (password.length > 20) {
    return { isValid: false, message: '密码长度不能超过20位' };
  }

  // 检查是否包含字母
  const hasLetter = /[a-zA-Z]/.test(password);
  // 检查是否包含数字
  const hasNumber = /\d/.test(password);

  if (!hasLetter || !hasNumber) {
    return { isValid: false, message: '密码必须包含字母和数字' };
  }

  // 检查字符合法性（只允许字母、数字、特殊字符）
  const validChars = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]*$/.test(password);
  if (!validChars) {
    return { isValid: false, message: '密码只能包含字母、数字和常见特殊字符' };
  }

  return { isValid: true };
}

// 确认密码验证
export function validateConfirmPassword(
  password: string,
  confirmPassword: string,
): ValidationResult {
  if (!confirmPassword) {
    return { isValid: false, message: '请再次输入密码' };
  }

  if (password !== confirmPassword) {
    return { isValid: false, message: '两次输入的密码不一致' };
  }

  return { isValid: true };
}

// 验证码验证
export function validateCode(code: string): ValidationResult {
  if (!code) {
    return { isValid: false, message: '验证码不能为空' };
  }

  if (!/^\d{6}$/.test(code)) {
    return { isValid: false, message: '请输入6位数字验证码' };
  }

  return { isValid: true };
}

// 注册表单验证
export function validateSignUpForm(formData: {
  phone: string;
  password: string;
  confirmPassword: string;
  code: string;
}): { [key: string]: string } {
  const errors: { [key: string]: string } = {};

  const phoneResult = validatePhone(formData.phone);
  if (!phoneResult.isValid) {
    errors.phone = phoneResult.message!;
  }

  const passwordResult = validatePassword(formData.password);
  if (!passwordResult.isValid) {
    errors.password = passwordResult.message!;
  }

  const confirmPasswordResult = validateConfirmPassword(
    formData.password,
    formData.confirmPassword,
  );
  if (!confirmPasswordResult.isValid) {
    errors.confirmPassword = confirmPasswordResult.message!;
  }

  const codeResult = validateCode(formData.code);
  if (!codeResult.isValid) {
    errors.code = codeResult.message!;
  }

  return errors;
}

// 登录表单验证
export function validateSignInForm(
  formData: {
    phone: string;
    code?: string;
    password?: string;
  },
  loginType: 'code' | 'password',
): { [key: string]: string } {
  const errors: { [key: string]: string } = {};

  const phoneResult = validatePhone(formData.phone);
  if (!phoneResult.isValid) {
    errors.phone = phoneResult.message!;
  }

  if (loginType === 'code' && formData.code !== undefined) {
    const codeResult = validateCode(formData.code);
    if (!codeResult.isValid) {
      errors.code = codeResult.message!;
    }
  }

  if (loginType === 'password' && formData.password !== undefined) {
    if (!formData.password) {
      errors.password = '密码不能为空';
    }
  }

  return errors;
}

// 忘记密码表单验证
export function validateForgotPasswordForm(formData: { email: string; code: string }): {
  [key: string]: string;
} {
  const errors: { [key: string]: string } = {};

  const emailResult = validateEmail(formData.email);
  if (!emailResult.isValid) {
    errors.email = emailResult.message!;
  }

  const codeResult = validateCode(formData.code);
  if (!codeResult.isValid) {
    errors.code = codeResult.message!;
  }

  return errors;
}
