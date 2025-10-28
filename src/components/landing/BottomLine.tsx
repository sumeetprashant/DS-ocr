import { Section } from "@/components/landing/Section";
import { PartyPopper } from "lucide-react";

export function BottomLine() {
  return (
    <Section>
      <div className="rounded-2xl bg-gradient-to-tr from-primary to-accent p-8 md:p-12 text-primary-foreground shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <PartyPopper className="size-16 shrink-0" />
          <div>
            <h2 className="font-headline text-4xl font-bold">🎊 Bottom Line</h2>
          </div>
        </div>
        <div className="mt-6 space-y-4 text-lg md:text-xl font-medium text-primary-foreground/90">
          <p>
            <strong>DeepSeek-OCR flipped the script:</strong> Instead of reading documents letter-by-letter like a slow student, AI now takes a photo and compresses it like a genius. This means AI can &quot;remember&quot; way more, process way faster, and cost way less—all while being just as accurate.
          </p>
          <p>
            It&apos;s like going from dial-up internet to fiber optic. Same information, completely different league of performance. 🚀
          </p>
        </div>
      </div>
    </Section>
  );
}
