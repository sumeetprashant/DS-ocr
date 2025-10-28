import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/landing/Section";
import { Cpu, GraduationCap, HeartPulse, Landmark } from "lucide-react";

const impacts = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "50% faster processing, 35% cost reduction, 40% faster records",
  },
  {
    icon: Landmark,
    title: "Legal/Finance",
    description: "30% faster reviews, better table parsing",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Digitize historical texts 10x faster",
  },
  {
    icon: Cpu,
    title: "AI Training",
    description: "200,000+ pages/day on 1 GPU",
  },
];

export function Impact() {
  return (
    <Section className="bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
          🌍 Real-World Impact
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {impacts.map((item) => (
          <Card key={item.title} className="flex flex-col sm:flex-row items-center gap-6 p-6 transition-shadow duration-300 hover:shadow-xl">
            <div className="rounded-full bg-primary/10 p-4">
              <item.icon className="size-10 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-1 text-base text-muted-foreground">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
