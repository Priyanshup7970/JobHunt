import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="py-24 flex flex-col items-center text-center">
      <div className="bg-accent-muted rounded-3xl p-12 w-full max-w-[1000px] border border-border">
        <h2 className="text-[32px] md:text-[40px] font-bold text-text-darkest mb-6">
          Ready to simplify your job hunt?
        </h2>
        <p className="text-[16px] text-text-secondary max-w-[500px] mx-auto mb-8">
          Join other developers who are finding better roles faster with JobHunt's AI-powered matching and research.
        </p>
        <Link href="/login" className="bg-accent text-accent-foreground px-8 py-4 rounded-md font-medium text-[16px] hover:opacity-90 transition-opacity inline-block">
          Start for free today
        </Link>
      </div>
    </section>
  );
}
