import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import HeroSVG from "./HeroSvg";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative bg-[#130B54] text-white">
      <HeroSVG />
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-10 md:leading-snug">
          Ready to Experience the Speed
          <br />
          That Redefines Connectivity?
        </h2>
        <p className="mt-4 text-lg text-indigo-200/90">
          Let&apos;s power your world with seamless internet.
        </p>
        <Button size="lg" className="mt-8 bg-[#F8D653] text-black hover:bg-[#F8D633] rounded-lg h-12 px-8 text-base">
          <Link href='#' className="flex items-center gap-2">
          Get Connected Today
          <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}