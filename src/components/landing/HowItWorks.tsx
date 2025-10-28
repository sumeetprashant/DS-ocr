import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/landing/Section";
import { ArrowRight, BrainCircuit, GitCommitHorizontal, Minimize2, Projector, ScanText } from "lucide-react";

export function HowItWorks() {
  return (
    <Section>
      <Card className="shadow-2xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl font-bold tracking-tight text-primary">
            🏗️ How It Works
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6 md:p-8">
          <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-6 text-primary-foreground">
            <div className="flex flex-col items-center justify-around gap-6 md:flex-row">
              <div className="flex-1 text-center">
                <Projector className="mx-auto mb-4 size-12" />
                <h3 className="text-2xl font-bold">DeepEncoder</h3>
                <p className="mt-2 text-lg font-semibold">380M parameters</p>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Takes document photos and compresses them intelligently
                </p>
              </div>
              <ArrowRight className="size-10 shrink-0 rotate-90 md:rotate-0" />
              <div className="flex-1 text-center">
                <BrainCircuit className="mx-auto mb-4 size-12" />
                <h3 className="text-2xl font-bold">MoE Decoder</h3>
                <p className="mt-2 text-lg font-semibold">3B parameters (570M active)</p>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Reads compressed tokens and outputs text
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">🔬 Three-Stage Magic:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-4">
                  <ScanText className="mt-1 size-6 shrink-0 text-accent" />
                  <div>
                    <span className="font-semibold">Local Perception:</span> Captures fine details like small text
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Minimize2 className="mt-1 size-6 shrink-0 text-accent" />
                  <div>
                    <span className="font-semibold">Aggressive Compression:</span> Shrinks it down 16x
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <GitCommitHorizontal className="mt-1 size-6 shrink-0 text-accent" />
                  <div>
                    <span className="font-semibold">Global Context:</span> Understands the whole document layout
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Section>
  );
}
