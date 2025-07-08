import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">注册</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            邮箱
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            用户名
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="username"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            密码
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            required
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
          注册
        </button>
      </form>
    </div>
  );
};

export default Register;
