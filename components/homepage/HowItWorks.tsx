export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create your profile",
      description: "Upload your resume or fill out your profile manually. Our AI extracts your skills automatically."
    },
    {
      step: "02",
      title: "Discover jobs",
      description: "Enter a role and location. Our agent searches Adzuna and scores the best matches for you."
    },
    {
      step: "03",
      title: "Research & Apply",
      description: "Click a job to get a deep-dive company dossier, then apply directly with one click."
    }
  ];

  return (
    <section className="py-20 flex flex-col items-center gap-12 bg-surface-secondary rounded-2xl px-8 my-8">
      <div className="text-center">
        <h2 className="text-[32px] font-bold text-text-primary mb-4">How It Works</h2>
        <p className="text-text-secondary text-[16px] max-w-[600px] mx-auto">
          Three simple steps to finding your next engineering role without the hassle.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-between max-w-[1000px]">
        {steps.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center flex-1">
            <div className="w-16 h-16 rounded-full bg-accent-light text-accent flex items-center justify-center text-[24px] font-bold mb-6">
              {item.step}
            </div>
            <h3 className="text-[18px] font-semibold text-text-primary mb-3">{item.title}</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
