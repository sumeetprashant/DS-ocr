import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/landing/Section";
import { Camera, FileText } from "lucide-react";

export function Problem() {
  return (
    <Section>
      <Card className="shadow-2xl rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-4xl font-bold tracking-tight text-primary">
            🤔 The Problem AI Had
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="mx-auto max-w-2xl text-center text-lg text-foreground/70">
            Imagine trying to remember a 1,000-page book by memorizing every single letter. That&apos;s exhausting! Traditional AI did exactly this with documents.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-muted/30">
              <CardHeader className="text-center">
                <FileText className="mx-auto mb-4 size-10 text-destructive" />
                <CardTitle className="text-2xl font-bold text-destructive">❌ OLD WAY</CardTitle>
                <p className="text-sm text-muted-foreground">Text Tokens</p>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="font-semibold">Each character = 1 token</p>
                <p className="text-3xl font-bold">4,000-7,000</p>
                <p className="text-sm text-muted-foreground">tokens/page</p>
                <div className="flex flex-wrap justify-center gap-1 pt-2">
                  <Badge variant="destructive">T</Badge>
                  <Badge variant="destructive">h</Badge>
                  <Badge variant="destructive">e</Badge>
                  <Badge variant="destructive"> </Badge>
                  <Badge variant="destructive">c</Badge>
                  <Badge variant="destructive">a</Badge>
                  <Badge variant="destructive">t</Badge>
                  <Badge variant="destructive">...</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary/90 text-primary-foreground">
              <CardHeader className="text-center">
                <Camera className="mx-auto mb-4 size-10 text-primary-foreground" />
                <CardTitle className="text-2xl font-bold text-primary-foreground">✅ NEW WAY</CardTitle>
                <p className="text-sm text-primary-foreground/70">Vision Tokens</p>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="font-semibold">Take a &quot;photo&quot; of the page</p>
                <p className="text-3xl font-bold">100-800</p>
                <p className="text-sm text-primary-foreground/70">tokens/page</p>
                <div className="flex justify-center pt-2">
                  <Badge className="bg-background text-foreground text-base px-4 py-2">
                    🖼️ Compressed!
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
