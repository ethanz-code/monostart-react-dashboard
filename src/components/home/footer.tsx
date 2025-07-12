export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 text-muted-foreground text-sm">
        <div className="text-center md:text-left break-words">
          © {new Date().getFullYear() != 2025 ? '2025 ~ ' + new Date().getFullYear() : '2025'}{' '}
          上海镭速科技有限公司，保留所有权利
        </div>
        <div className="flex gap-2 sm:gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-accent-foreground transition">
            隐私政策
          </a>
          <a href="#" className="hover:text-accent-foreground transition">
            条款
          </a>
        </div>
      </div>
    </footer>
  );
}
