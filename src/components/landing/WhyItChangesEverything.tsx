import { Section } from "@/components/landing/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, DollarSign, Globe2, Scan } from "lucide-react";

const reasons = [
  {
    icon: Scan,
    title: "Massive Context Windows",
    description: "AI can now 'remember' entire books or massive codebases at once—millions of tokens!",
    borderColor: "border-primary",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description: "10x compression = 10x more documents with same computing power = way less $$$",
    borderColor: "border-accent",
  },
  {
    icon: BrainCircuit,
    title: "Smarter Memory",
    description: "Like human memory: recent stuff stays sharp, old stuff gets compressed but not forgotten",
    borderColor: "border-blue-500",
  },
  {
    icon: Globe2,
    title: "Open Source",
    description: "Anyone can use it! No vendor lock-in, democratizes AI for everyone",
    borderColor: "border-green-500",
  },
];

export function WhyItChangesEverything() {
  return (
    <Section>
      <Card className="shadow-2xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl font-bold tracking-tight text-primary">
            🎯 Why This Changes Everything
          </CardTitle>
          <p className="mx-auto mt-2 max-w-lg text-lg text-muted-foreground">The Big Deal</p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
          {reasons.map((reason) => (
            <div key={reason.title} className={`rounded-lg bg-background p-6 border-l-4 ${reason.borderColor} shadow-md`}>
              <div className="flex items-center gap-4">
                <reason.icon className="size-8 text-foreground/80" />
                <h3 className="font-headline text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </Section>
  );
}
