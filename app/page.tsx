import { Hero } from "@/components/homepage/Hero";
import { Features } from "@/components/homepage/Features";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Testimonial } from "@/components/homepage/Testimonial";
import { BottomCTA } from "@/components/homepage/BottomCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonial />
      <BottomCTA />
    </div>
  );
}