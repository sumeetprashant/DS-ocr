import { Rocket } from "lucide-react";
import { Section } from "@/components/landing/Section";

export function Hero() {
  return (
    <Section className="text-center">
      <div className="flex flex-col items-center gap-6">
        <Rocket className="size-12 text-accent" />
        <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-primary via-accent to-primary">
          DeepSeek-OCR
        </h1>
        <p className="max-w-2xl text-lg text-foreground/80 md:text-xl">
          The AI Game Changer: Making AI 10-20x More Efficient by Treating Text Like Photos
        </p>
      </div>
    </Section>
  );
}
