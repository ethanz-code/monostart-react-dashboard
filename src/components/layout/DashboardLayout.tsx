import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Home, BarChart3, PieChart, Folder, User, Settings, Menu, X } from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const topMenuItems = [
    {
      to: '/dashboard',
      icon: Home,
      label: '概览',
      color: '#3B82F6', // blue
    },
    {
      to: '/analytics',
      icon: BarChart3,
      label: '分析',
      color: '#10B981', // green
    },
    {
      to: '/usage',
      icon: PieChart,
      label: '使用统计',
      color: '#F59E0B', // amber
    },
    {
      to: '/projects',
      icon: Folder,
      label: '项目',
      color: '#8B5CF6', // violet
    },
  ];

  const bottomMenuItems = [
    {
      to: '/profile',
      icon: User,
      label: '个人资料',
      color: '#EF4444', // red
    },
    {
      to: '/settings',
      icon: Settings,
      label: '设置',
      color: 'unset',
    },
  ];

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const getItemStyle = (itemPath: string) => {
    const isSelected = activeItem === itemPath;
    const baseStyle =
      'flex items-center gap-3 px-3 py-2 text-sm rounded-[var(--radius)] transition-all duration-200 cursor-pointer';

    if (isSelected) {
      return `${baseStyle} bg-white dark:bg-primary/20 hover:bg-white dark:hover:bg-primary/20 active:bg-gray-150/50 dark:active:bg-primary/40`;
    } else {
      return `${baseStyle} hover:bg-white dark:hover:bg-primary/20 active:bg-gray-150/50 dark:active:bg-primary/40 text-primary`;
    }
  };

  const SidebarContent = () => (
    <>
      {/* Logo区域 */}
      <div className="hidden md:block pb-3 border-b border-gray-100 dark:border-border">
        <h1 className="text-2xl text-center font-bold text-card-foreground">Lorem, ipsum.</h1>
      </div>

      {/* 主要菜单项 */}
      <nav className="pt-4 px-1">
        <ul className="space-y-2">
          {topMenuItems.map((item) => (
            <li key={item.to}>
              <div onClick={() => handleMenuItemClick(item.to)} className={getItemStyle(item.to)}>
                <item.icon
                  className="h-5 w-5 text-muted-foreground"
                  style={{
                    color: activeItem === item.to ? item.color : undefined,
                  }}
                />
                <span
                  style={{
                    color: activeItem === item.to ? item.color : undefined,
                  }}
                >
                  {item.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* 底部菜单项 */}
      <div className="mt-auto">
        <nav className="pb-6">
          <ul className="space-y-2">
            {bottomMenuItems.map((item) => (
              <li key={item.to}>
                <div onClick={() => handleMenuItemClick(item.to)} className={getItemStyle(item.to)}>
                  <item.icon
                    className="h-5 w-5 text-muted-foreground"
                    style={{
                      color: activeItem === item.to ? item.color : undefined,
                    }}
                  />
                  <span
                    style={{
                      color: activeItem === item.to ? item.color : undefined,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* 页脚信息 */}
        <div className="text-xs text-muted-foreground space-y-2 px-3 pb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <span>服务状态</span>
            <span>·</span>
            <span>开放平台协议</span>
            <span>·</span>
            <span>隐私政策</span>
            <span>·</span>
            <span>XICP备2023020001号</span>
            <span>·</span>
            <span>X公网安备 33010502000001 号</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* 移动端顶部导航栏 */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-muted-foreground hover:text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-bold text-card-foreground">Lorem, ipsum.</h1>
          <div className="w-10" /> {/* 占位符保持居中 */}
        </div>
      </div>

      {/* 移动端侧边菜单 */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ease-in-out delay-0 ${
          isMobileMenuOpen
            ? 'bg-black/20 backdrop-blur-sm opacity-100 pointer-events-auto'
            : 'bg-transparent backdrop-blur-none opacity-0 pointer-events-none'
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div
          className={`flex flex-col h-full bg-accent/95 dark:bg-accent backdrop-blur-sm transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
          style={{ width: '280px' }}
        >
          {/* 顶部关闭按钮 */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold text-card-foreground">Lorem, ipsum.</h1>
            <div className="w-10" />
          </div>

          {/* 菜单内容 */}
          <div className="flex flex-col h-full px-4 py-3 justify-between">
            <SidebarContent />
          </div>
        </div>
      </div>

      {/* 桌面端左侧菜单栏 */}
      <div className="hidden md:flex w-[var(--dashboard-menu-width)] bg-accent/45 dark:bg-accent flex-col fixed left-0 top-0 h-full">
        <div className="flex flex-col h-full px-4 py-3 justify-between">
          <SidebarContent />
        </div>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 md:ml-[var(--dashboard-menu-width)] bg-background pt-16 md:pt-0">
        <div className="max-w-[var(--dashboard-content-max-width)] w-full mx-auto px-6 py-4 md:px-9 md:py-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
