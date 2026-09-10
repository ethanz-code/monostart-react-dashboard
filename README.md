# Monostart React Dashboard

基于 React 19 + Vite 8 + TypeScript 5.9 的仪表盘起始模板：内置登录/注册/忘记密码、响应式侧边栏布局、深浅色主题切换，以及一组 shadcn 风格的 UI 组件，适合快速搭建管理后台和数据分析平台。

> [!TIP]
> 使用 [pnpm](https://pnpm.io/) 管理依赖，Node.js 18+ 即可运行。

## 特性

- 🖥️ **完整仪表盘页面**：概览、分析、用量、项目、个人资料、设置 6 个页面
- 🧩 **shadcn 风格组件**：基于 [radix-ui](https://www.radix-ui.com/) + Tailwind CSS 4 + CVA，见 `src/components/ui/`，可用 shadcn CLI 按 `components.json` 继续添加
- ⚡ **路由懒加载**：React Router 8 的 `createBrowserRouter` + 动态 `import()`，仪表盘页面按需加载
- 🌗 **主题系统**：浅色 / 深色 / 跟随系统，基于 CSS 变量
- 🔐 **认证页面**：登录、注册、忘记密码，含验证码倒计时（Zustand 持久化）
- 🧹 **工程质量**：ESLint + oxlint 双重检查、Prettier、Husky + lint-staged、commitlint

## 技术栈

| 分类        | 选型                                                             |
| ----------- | ---------------------------------------------------------------- |
| 框架        | React 19、React Router 8、TypeScript 5.9                         |
| 构建        | Vite 8（SWC 插件）                                               |
| 样式        | Tailwind CSS 4、tw-animate-css、lucide-react 图标                |
| 组件        | radix-ui、class-variance-authority、shadcn（new-york 风格）      |
| 状态 / 请求 | Zustand（`@ethan-utils/zustand`）、Axios（`@ethan-utils/axios`） |
| 规范        | ESLint 10、oxlint、Prettier、Husky、commitlint                   |

## 快速开始

```sh
pnpm install   # 安装依赖
pnpm dev       # 启动开发服务器（自动打开浏览器）
```

构建与预览：

```sh
pnpm build     # tsc 类型检查 + vite 构建，输出到 dist/
pnpm preview   # 本地预览生产构建
```

## 目录结构

```text
src/
├── components/
│   ├── ui/          # shadcn 风格基础组件（button、input、dropdown-menu 等）
│   ├── layout/      # AuthLayout、DashboardLayout（响应式侧边栏）
│   ├── theme/       # 主题 Provider 与切换按钮
│   └── home/        # 首页 hero、header、footer
├── views/
│   ├── auth/        # 登录 / 注册 / 忘记密码
│   ├── dashboard/   # 6 个仪表盘页面
│   └── Home.tsx     # 落地页
├── router/          # 路由配置（仪表盘页面懒加载）
├── store/           # Zustand store（如验证码倒计时）
├── form-fields/     # 表单字段组件
├── lib/ utils/      # 工具函数
└── assets/          # 样式与静态资源
```

## 脚本说明

| 命令                | 说明                                           |
| ------------------- | ---------------------------------------------- |
| `pnpm dev`          | 启动开发服务器                                 |
| `pnpm build`        | 类型检查 + 生产构建                            |
| `pnpm preview`      | 预览生产构建                                   |
| `pnpm lint`         | 依次运行 oxlint 和 ESLint（自动修复）          |
| `pnpm format`       | Prettier 格式化 `src/`                         |
| `pnpm format-watch` | 监听文件变化自动格式化                         |
| `pnpm commit`       | 交互式生成符合 Conventional Commits 的提交信息 |

## 部署

项目为纯前端 SPA，任意静态托管（Vercel、Netlify、Nginx 等）均可，产物在 `dist/`。

仓库根目录提供 [Dockerfile](Dockerfile)，基于 Node 20 多阶段构建。注意：它当前按 npm + `build/` 目录 + `start` 脚本编写，与本模板的 pnpm + `dist/` 输出不完全一致，用于容器化部署前需将其调整为 `pnpm install && pnpm build` 并以静态服务器（如 `serve dist`）运行。

## 参考文档

- [React](https://react.dev/) · [React Router](https://reactrouter.com/) · [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/) · [Radix UI](https://www.radix-ui.com/)
- [pnpm](https://pnpm.io/)
