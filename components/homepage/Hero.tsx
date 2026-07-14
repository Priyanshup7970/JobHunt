import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16 gap-8">
      <div className="flex flex-col items-center max-w-[800px] gap-6">
        <h1 className="text-[40px] md:text-[56px] font-bold text-text-darkest leading-tight">
          Your AI-Powered <span className="text-accent">Job Hunting</span> Assistant
        </h1>
        <p className="text-[18px] text-text-secondary leading-relaxed max-w-[600px]">
          Stop reading hundreds of job descriptions. We match jobs to your profile intelligently and research the company for you before you apply.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Link href="/login" className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium text-[16px] hover:opacity-90 transition-opacity">
            Get Started
          </Link>
          <Link href="/find-jobs" className="bg-surface text-text-primary border border-border px-6 py-3 rounded-md font-medium text-[16px] hover:bg-surface-secondary transition-colors">
            Find Your First Match
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-[1000px] mt-8 rounded-[16px] overflow-hidden border border-border shadow-md">
        <Image 
          src="/images/dashboard-demo.png" 
          alt="JobHunt Dashboard Preview" 
          width={1000} 
          height={600} 
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
