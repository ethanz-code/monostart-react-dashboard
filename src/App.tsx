import React from 'react';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from './components/theme-provider';
import router from './router';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
};

export default App;
