# React Dashboard Starter

现代化的 React 仪表盘起始项目，基于 Vite、React 19、TypeScript 构建，内置完整的认证系统和响应式仪表盘布局，采用 TailwindCSS v4 和 pnpm 包管理，适合快速搭建管理后台和数据分析平台。

## 项目亮点

- **完整仪表盘解决方案**：内置响应式侧边栏、主题切换、多页面布局
- **现代化认证系统**：登录、注册、忘记密码页面，包含验证码功能
- **React 19 + Vite**：极速开发体验，支持最新 React 特性和 SWC 编译
- **TailwindCSS v4**：全新原子化 CSS 方案，支持 CSS 变量和主题系统
- **TypeScript 全量支持**：完整类型定义，开发体验更佳
- **双重代码检查**：oxlint + ESLint 双重保障，Prettier 统一格式化
- **状态管理**：集成 Zustand 轻量级状态管理方案

## 目录结构

```text
react-dashboard-starter/
├── src/                       # 主应用源码
│   ├── components/            # 可复用组件
│   │   ├── ui/               # 基础 UI 组件
│   │   ├── layout/           # 布局组件
│   │   ├── theme/            # 主题相关组件
│   │   └── home/             # 首页组件
│   ├── views/                # 页面组件
│   │   ├── auth/             # 认证相关页面
│   │   └── dashboard/        # 仪表盘页面
│   ├── router/               # 路由配置
│   ├── store/                # 状态管理
│   ├── utils/                # 工具函数
│   ├── lib/                  # 第三方库配置
│   ├── assets/               # 静态资源
│   └── main.tsx              # 应用入口
├── public/                   # 公共资源
├── packages/                 # 扩展包（可选）
├── package.json              # 依赖配置
├── vite.config.ts            # Vite 配置
└── tsconfig.json             # TypeScript 配置
```

## 快速开始

### 环境要求

- Node.js 18 及以上
- [pnpm](https://pnpm.io/) 10 及以上

### 安装依赖

```sh
pnpm install
```

### 启动开发服务器

```sh
pnpm dev          # 启动开发服务器（自动打开浏览器）
```

### 构建和预览

```sh
pnpm build        # 构建生产版本
pnpm preview      # 预览生产版本
```

### 代码检查与格式化

```sh
pnpm lint         # 运行所有代码检查
pnpm format       # 格式化代码
pnpm format-watch # 监听文件变化并自动格式化
```

## 功能特性

### 🎨 主题系统

- 支持浅色/深色/系统自动主题切换
- 基于 CSS 变量的主题系统
- 渐变背景效果适配主题

### 🔐 认证系统

- 登录/注册/忘记密码页面
- 验证码倒计时功能
- 表单验证和错误处理

### 📱 响应式仪表盘

- 自适应侧边栏布局
- 移动端汉堡菜单
- 多个仪表盘页面（概览、分析、使用统计、项目、个人资料、设置）

### 🛠 开发体验

- 热重载开发环境
- TypeScript 类型安全
- 代码自动格式化和检查
- Git 提交规范化

## 推荐开发工具

- [VSCode](https://code.visualstudio.com/) + TypeScript 支持
- [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 扩展

## 技术栈

### 核心框架

- **React 19**：最新 React 版本，支持并发特性
- **React Router 7**：现代化路由管理
- **TypeScript**：类型安全的 JavaScript 超集
- **Vite**：极速构建工具

### UI 和样式

- **TailwindCSS v4**：新一代原子化 CSS 框架
- **Radix UI**：无障碍访问的组件基础库
- **Lucide React**：现代化图标库
- **class-variance-authority**：类变体管理

### 状态管理和工具

- **Zustand**：轻量级状态管理（通过 @ethan-utils/zustand）
- **Axios**：HTTP 客户端（通过 @ethan-utils/axios）
- **QR Code**：二维码生成

### 开发工具

- **ESLint + oxlint**：双重代码检查
- **Prettier**：代码格式化
- **Husky + lint-staged**：Git 钩子和预提交检查
- **Commitlint**：提交信息规范化

## 代码规范与提交

- 双重代码检查：oxlint（快速）+ ESLint（全面）
- Prettier 自动格式化代码
- Husky 预提交钩子自动检查和格式化
- Commitlint 强制规范化提交信息
- 使用 `pnpm commit` 获得交互式提交体验

## 项目结构说明

### 路由系统

- 使用 React Router 7 的 `createBrowserRouter`
- 支持懒加载的仪表盘路由
- 认证页面和仪表盘页面分离

### 组件架构

- `components/ui/`：基于 Radix UI 的基础组件
- `components/layout/`：布局相关组件
- `components/theme/`：主题切换组件
- `views/`：页面级组件

### 状态管理

- 使用 Zustand 进行轻量级状态管理
- 支持 localStorage 持久化
- 模块化的 store 设计

## 扩展指南

### 添加新页面

1. 在 `src/views/` 下创建新组件
2. 在 `src/router/index.ts` 中添加路由配置
3. 如需侧边栏菜单，更新 `DashboardLayout.tsx`

### 自定义主题

- 修改 CSS 变量定义
- 在 `theme-provider.tsx` 中调整主题逻辑
- TailwindCSS 配置支持自定义扩展

### 添加新的 UI 组件

- 参考 `components/ui/` 中现有组件
- 使用 Radix UI 作为无障碍访问基础
- 配合 TailwindCSS 和 CVA 进行样式管理

## 参考文档

- [React 19 官方文档](https://react.dev/)
- [React Router 7 官方文档](https://reactrouter.com/)
- [Vite 官方文档](https://vitejs.dev/)
- [TailwindCSS v4 官方文档](https://tailwindcss.com/)
- [Radix UI 官方文档](https://www.radix-ui.com/)
- [Zustand 官方文档](https://zustand-demo.pmnd.rs/)
- [pnpm 官方文档](https://pnpm.io/)

## 许可证

本项目基于 MIT 许可证开源。

---

⚡ 由 React 19、Vite、TailwindCSS v4 强力驱动，为现代化仪表盘开发而生。
