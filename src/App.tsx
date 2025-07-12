import React from 'react';
import { RouterProvider } from 'react-router';
import { ThemeProvider, useTheme } from './components/theme/theme-provider';
import router from './router';

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  const [systemTheme, setSystemTheme] = React.useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  );

  // 监听系统主题变化
  React.useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <div className="min-h-screen w-full relative bg-black">
        {/* X Organizations Black Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000',
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Cool Blue Glow Left */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#ffffff',
          backgroundImage: `
        radial-gradient(
          circle at top left,
          rgba(70, 130, 180, 0.5),
          transparent 70%
        )
      `,
          filter: 'blur(80px)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BackgroundWrapper>
        <RouterProvider router={router}></RouterProvider>
      </BackgroundWrapper>
    </ThemeProvider>
  );
};

export default App;
