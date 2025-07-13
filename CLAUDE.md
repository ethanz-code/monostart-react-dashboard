# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with auto-open browser
- `pnpm build` - Build for production (runs TypeScript check + Vite build)
- `pnpm preview` - Preview production build
- `pnpm lint` - Run all linting (oxlint + eslint with auto-fix)
- `pnpm format` - Format code with Prettier
- `pnpm format-watch` - Watch and auto-format on file changes
- `pnpm commit` - Interactive commit with commitlint

## Project Architecture

### Tech Stack

- **Frontend**: React 19 with React Router 7, TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: TailwindCSS v4 with custom CSS variables for theming
- **State Management**: Zustand via `@ethan-utils/zustand`
- **HTTP Client**: Axios via `@ethan-utils/axios`
- **UI Components**: Custom components built on Radix UI primitives
- **Code Quality**: ESLint + oxlint + Prettier + Husky + commitlint

### Application Structure

#### Router Configuration (src/router/index.ts)

- Uses `createBrowserRouter` with lazy loading for dashboard routes
- Dynamic route creation via `createDashboardRoute` helper
- Authentication routes: `/sign_in`, `/sign_up`, `/forgot_password`
- Dashboard routes: `/dashboard`, `/analytics`, `/usage`, `/projects`, `/profile`, `/settings`

#### Layout System

- **DashboardLayout**: Responsive sidebar with mobile hamburger menu
- Desktop: Fixed 280px sidebar with main content area
- Mobile: Slide-out overlay menu with backdrop blur
- Theme-aware styling with automatic dark/light mode switching

#### Theme System (src/components/theme/theme-provider.tsx)

- System-preferred theme detection with manual override
- CSS custom properties for consistent theming
- Gradient backgrounds that adapt to theme (blue glow for light, top glow for dark)

#### State Management

- Zustand stores with localStorage persistence
- Example: `useCaptchaStore` for captcha countdown timer state

### Key Patterns

#### Component Organization

- `src/components/`: Reusable UI components
  - `ui/`: Base UI primitives (button, input, etc.)
  - `layout/`: Layout-specific components
  - `theme/`: Theme-related components
- `src/views/`: Page-level components
- `src/form-fields/`: Form-specific components

#### Styling Approach

- TailwindCSS utility classes with CSS custom properties
- Responsive design with mobile-first approach
- Theme-aware components using CSS variables
- Custom color system with semantic naming

#### Import Aliases

- `@/` - Points to `src/` directory (configured in vite.config.ts)

### Development Notes

#### No Test Framework

- No test files or testing framework currently configured
- Consider adding testing setup if implementing new features

#### Linting Setup

- Dual linting with oxlint (fast) + ESLint (comprehensive)
- React-specific rules enabled
- Automatic fixing on lint command

#### Commit Workflow

- Husky pre-commit hooks for linting and formatting
- Commitlint enforces conventional commit messages
- Use `pnpm commit` for guided commit message creation

#### Build Process

- TypeScript compilation check before Vite build
- SWC for fast React compilation
- Code inspector plugin for development debugging
