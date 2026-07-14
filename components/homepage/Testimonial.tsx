export function Testimonial() {
  return (
    <section className="py-20 flex justify-center">
      <div className="bg-surface border border-border p-10 rounded-2xl max-w-[800px] text-center shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
        <p className="text-[20px] md:text-[24px] font-medium text-text-darker leading-relaxed mb-8 italic">
          "JobHunt completely changed my approach. Instead of applying to 100 jobs blindly, I focused on my top 5 matches with deep company insights, and got 3 offers in two weeks."
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-accent-muted rounded-full flex items-center justify-center text-accent font-bold text-[18px]">
            SA
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-text-primary">Sarah A.</h4>
            <span className="text-[14px] text-text-secondary">Senior Frontend Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
