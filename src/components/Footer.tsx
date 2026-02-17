export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-dim bg-surface/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 font-mono text-[10px] uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-xl">
            terminal
          </span>
          <span>&copy; 2024 NEXUS DIGITAL // GROWTH_PARTNER</span>
        </div>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">
            Privacy_Policy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms_of_Service
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Github
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2 bg-green-500 rounded-full"></span>
          ALL_SYSTEMS_OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
