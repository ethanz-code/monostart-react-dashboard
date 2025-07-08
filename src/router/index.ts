import { createBrowserRouter } from 'react-router';
import Home from '../views/Home';
import Login from '../views/Login';
import Register from '../views/Register';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/dashboard',
    lazy: async () => {
      return { Component: (await import('../views/dashboard/Dashboard')).default };
    },
  },
]);

export default router;
