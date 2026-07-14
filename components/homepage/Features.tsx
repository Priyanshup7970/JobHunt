export function Features() {
  const features = [
    {
      title: "Intelligent Matching",
      description: "We use GPT-4o to score every job against your actual skills and experience, not just keywords.",
      icon: "🎯"
    },
    {
      title: "Automated Research",
      description: "Our agent browses the company's website to build a structured dossier on their tech stack, culture, and interview prep.",
      icon: "🔍"
    },
    {
      title: "Insightful Analytics",
      description: "Track your job search progress over time with built-in PostHog analytics and visual dashboards.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 flex flex-col items-center gap-12">
      <div className="text-center">
        <h2 className="text-[32px] font-bold text-text-primary mb-4">Why use JobHunt?</h2>
        <p className="text-text-secondary text-[16px] max-w-[600px] mx-auto">
          We automate the tedious parts of job hunting so you can focus on the interviews that actually matter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {features.map((feature, index) => (
          <div key={index} className="bg-surface border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[32px] mb-4">{feature.icon}</div>
            <h3 className="text-[18px] font-semibold text-text-primary mb-2">{feature.title}</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
