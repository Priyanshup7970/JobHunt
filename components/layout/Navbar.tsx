import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full bg-surface h-16 px-6 flex items-center justify-between border-b border-border">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(45deg, #7C5CFC 0%, #4A2EC5 100%)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="3" width="7" height="7" rx="1"></rect>
              <rect x="14" y="14" width="7" height="7" rx="1"></rect>
              <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            </svg>
          </div>
          <span className="text-[19px] font-bold text-text-darkest leading-[28px]">JobHunt</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-[14px] font-medium text-text-dark hover:text-accent transition-colors">
            Dashboard
          </Link>
          <Link href="/find-jobs" className="text-[14px] font-medium text-text-dark hover:text-accent transition-colors">
            Find Jobs
          </Link>
          <Link href="/profile" className="text-[14px] font-medium text-text-dark hover:text-accent transition-colors">
            Profile
          </Link>
        </nav>
      </div>
      <div>
        <Link href="/login" className="bg-accent text-accent-foreground rounded-md px-4 py-2 text-[14px] font-medium transition-opacity hover:opacity-90">
          Start for free
        </Link>
      </div>
    </header>
  );
}
