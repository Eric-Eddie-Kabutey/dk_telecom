import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-[#130B54] text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-10 md:leading-snug">
          Ready to Experience the Speed
          <br />
          That Redefines Connectivity?
        </h2>
        <p className="mt-4 text-lg text-indigo-200/90">
          Let&apos;s power your world with seamless internet.
        </p>
        <Button size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg h-12 px-8 text-base">
          Get Connected Today
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}