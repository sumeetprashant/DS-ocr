import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/landing/Section";
import { BookOpen, File as FileIcon, FileClock, Newspaper, Table2 } from "lucide-react";

const modes = [
  { icon: FileClock, title: "Tiny", tokens: "64 tokens", use: "Simple receipts" },
  { icon: FileIcon, title: "Small", tokens: "100 tokens", use: "Business docs" },
  { icon: Table2, title: "Base", tokens: "256 tokens", use: "Reports with tables" },
  { icon: BookOpen, title: "Large", tokens: "400 tokens", use: "Technical papers" },
  { icon: Newspaper, title: "Gundam", tokens: "400-1,800 tokens", use: "Complex layouts" },
];

export function ResolutionModes() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">
          🎛️ Five Resolution Modes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          Choose the right power level for your document:
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {modes.map((mode) => (
          <Card key={mode.title} className="group transform text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <CardHeader>
              <mode.icon className="mx-auto size-12 text-primary transition-colors group-hover:text-accent" />
            </CardHeader>
            <CardContent className="space-y-2">
              <h3 className="text-xl font-bold">{mode.title}</h3>
              <p className="text-2xl font-semibold text-accent">{mode.tokens}</p>
              <p className="text-sm text-muted-foreground">{mode.use}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
