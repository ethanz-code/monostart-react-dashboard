import { createBrowserRouter } from 'react-router';
import Home from '@/views/Home';
import SignIn from '@/views/auth/SignIn';
import SignUp from '@/views/auth/SignUp';
import ForgotPassword from '@/views/auth/ForgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/sign_in',
    Component: SignIn,
  },
  {
    path: '/sign_up',
    Component: SignUp,
  },
  {
    path: '/forgot_password',
    Component: ForgotPassword,
  },
  {
    path: '/dashboard',
    lazy: async () => {
      return { Component: (await import('../views/dashboard/Dashboard')).default };
    },
  },
]);

export default router;
