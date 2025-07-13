import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
  sideContent?: React.ReactNode;
  showFooter?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg';
  verticalBetween?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title = 'Lorem, ipsum.',
  children,
  sideContent,
  showFooter = true,
  maxWidth = 'md',
  verticalBetween = true,
}) => {
  const cardMaxWidth = {
    sm: 'max-w-[400px]',
    md: 'max-w-[400px] md:max-w-[700px]',
    lg: 'max-w-[400px] md:max-w-[900px]',
  };

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-y-auto text-sm">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center sm:justify-center pt-12 sm:pt-0 gap-6 sm:gap-10 p-2">
        {/* Title */}
        <span className="text-2xl sm:text-4xl font-bold tracking-widest mt-6 sm:mt-0">{title}</span>

        {/* Main card */}
        <div
          className={cn(
            'flex flex-col-reverse w-full',
            // 大屏幕显示卡片样式
            'md:flex-row md:bg-card md:rounded-2xl md:shadow-lg md:border md:border-border md:p-3 md:min-h-[440px]',
            cardMaxWidth[maxWidth],
          )}
        >
          {/* Main content */}
          <div
            className={cn(
              'flex-1 flex flex-col p-3 py-2 md:p-6 md:pb-4',
              verticalBetween ? 'justify-between' : 'justify-center',
            )}
          >
            {children}
          </div>

          {/* Side content (only show on desktop and if provided) */}
          {sideContent && (
            <div className="hidden md:block w-2/5 bg-accent/40 rounded-xl md:ml-5">
              <div className="h-full flex flex-col items-center justify-center">{sideContent}</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      {showFooter && (
        <div className="text-center text-muted-foreground text-[13px] py-6">
          XICP备2022000001号 ·{' '}
          <a href="#" className="underline hover:text-primary">
            联系我们
          </a>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
