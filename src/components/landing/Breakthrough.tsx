import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/landing/Section";
import { ArrowRight, DatabaseZap, FileText, Camera, Sparkles } from "lucide-react";

export function Breakthrough() {
  return (
    <Section>
      <Card className="shadow-2xl rounded-2xl overflow-hidden">
        <CardHeader className="bg-muted/30">
          <CardTitle className="text-center font-headline text-4xl font-bold tracking-tight text-primary">
            💡 The Breakthrough
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 md:p-8 space-y-8">
          <p className="mx-auto max-w-2xl text-center text-lg text-foreground/70">
            Instead of reading letter-by-letter, DeepSeek-OCR takes a high-quality photo of each page and compresses it into compact &quot;vision tokens.&quot;
          </p>
          
          <div className="flex flex-wrap items-center justify-around gap-4 rounded-lg bg-muted/50 p-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <FileText className="size-10 text-primary" />
              <p className="font-semibold">Document</p>
            </div>
            <ArrowRight className="size-8 text-muted-foreground hidden sm:block" />
            <div className="flex flex-col items-center gap-2">
              <Camera className="size-10 text-primary" />
              <p className="font-semibold">Convert to Image</p>
            </div>
            <ArrowRight className="size-8 text-muted-foreground hidden sm:block" />
            <div className="flex flex-col items-center gap-2">
              <DatabaseZap className="size-10 text-primary" />
              <p className="font-semibold">Compress</p>
            </div>
            <ArrowRight className="size-8 text-muted-foreground hidden sm:block" />
            <div className="flex flex-col items-center gap-2">
              <Sparkles className="size-10 text-accent" />
              <p className="font-semibold">Vision Tokens</p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-8 text-center text-primary-foreground shadow-lg">
            <p className="text-lg font-medium">Compression Ratio</p>
            <p className="font-headline text-7xl font-bold">10-20x</p>
            <p className="text-lg font-medium">While maintaining 97% accuracy!</p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
