import { createBrowserRouter } from 'react-router';
import Home from '@/views/Home';
import SignIn from '@/views/auth/SignIn';
import SignUp from '@/views/auth/SignUp';
import ForgotPassword from '@/views/auth/ForgotPassword';
import DashboardLayout from '@/components/layout/DashboardLayout';

const createDashboardRoute = (path: string, componentName: string) => ({
  path,
  Component: DashboardLayout,
  children: [
    {
      index: true,
      lazy: async () => {
        return { Component: (await import(`../views/dashboard/${componentName}`)).default };
      },
    },
  ],
});

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
  createDashboardRoute('/dashboard', 'OverviewPage'),
  createDashboardRoute('/analytics', 'AnalyticsPage'),
  createDashboardRoute('/usage', 'UsagePage'),
  createDashboardRoute('/projects', 'ProjectsPage'),
  createDashboardRoute('/profile', 'ProfilePage'),
  createDashboardRoute('/settings', 'SettingsPage'),
]);

export default router;
