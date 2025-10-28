import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Breakthrough } from "@/components/landing/Breakthrough";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ResolutionModes } from "@/components/landing/ResolutionModes";
import { Impact } from "@/components/landing/Impact";
import { WhyItChangesEverything } from "@/components/landing/WhyItChangesEverything";
import { BottomLine } from "@/components/landing/BottomLine";
import { PageFooter } from "@/components/landing/PageFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <Problem />
      <Breakthrough />
      <HowItWorks />
      <ResolutionModes />
      <Impact />
      <WhyItChangesEverything />
      <BottomLine />
      <PageFooter />
    </main>
  );
}
