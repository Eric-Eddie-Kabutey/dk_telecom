"use client";

import { Button } from "@/components/ui/button";
import { CircleDot } from "lucide-react";
import DigitalizingValueInEquityCredit from "../svg/digitalize-values";
import { HeaderPillLine } from "../shared/HeaderPillLine";
import WaterfallSVG from "../svg/waterfall-svg";


// --- Data for the Platform Pillars ---
const pillarsData = [
  {
    id: "value",
    tag: "73 Value",
    title: "Digitalizing Valuations in Equity and Credit",
    imageUrl: "/assets/images/pillar-value.png", // 
    heading: "Take control of your valuation insights with AI, advanced analytics, and tailored workflows for faster, accurate, audit-ready results.",
    features: [
      "Scale your valuations with frequency and speed",
      "Defendable and compliant valuations - SOC 1 and SOC 2",
      "Value Equity and Credit portfolios",
    ],
  },
  {
    id: "monitor",
    tag: "73 Monitor",
    title: "Precision Analytics for Actionable Insights",
    imageUrl: "/assets/images/pillar-monitor.png", 
    heading: "Experience AI-augmented portfolio monitoring like never before and revolutionize your data-driven decisiveness.",
    features: [
        "Portfolio performance data at the click of a button",
        "Enhanced multi-language visualization capabilities",
        "Dig into historical data, identify patterns and model future scenarios with AI ready data models",
    ],
  },
  {
    id: "extract",
    tag: "73 Extract",
    title: "Unleashing Insights from Unstructured Data",
    imageUrl: "/assets/images/pillar-extract.png", 
    heading: "Capture transformative portfolio insights with AI that extracts unstructured data with unmatched accuracy.",
    features: [
        "Feed Monitoring & Valuation models with formerly inaccessible data sets",
        "Extract key metrics from any document type in 135+ languages",
        "Automate data extraction from legal docs, financial, ESG reports and more",
    ],
  },
];


export function KeyPillarsSection() {
  return (
    <section className="ibm relative bg-[#130B54] text-white py-20 md:py-28 overflow-hidden">
      {/* Container for your background SVG */}
      <div className="absolute right-2/3 -top-10 z-0 overflow-hidden">
        <WaterfallSVG />        
      </div>

      <div className="max-container relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">         
          <HeaderPillLine text="Our Solutions" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-regular tracking-tight leading-snug md:leading-tight">
              The Key Pillars Supporting Our Platform&apos;s Success
            </h2>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-20">
          {pillarsData.map((pillar) => (
            <div key={pillar.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Visual Card */}
              <div className="flex flex-col items-center">
                <div className="bg-[#130B54] border border-yellow-400 px-6 py-8 -mb-8 rounded-t-lg shadow-lg z-10">
                  <span className="font-semibold text-lg">{pillar.tag}</span>
                </div>
                <div className="bg-white pt-12 px-8 rounded-b-2xl rounded-tr-2xl shadow-xl w-full">
                  <p className="text-center mb-4  md:mb-6 text-[#130B54] text-lg">{pillar.title}</p>
                  {/* <Image
                    src={pillar.imageUrl}
                    alt={`${pillar.tag} dashboard preview`}
                    width={550}
                    height={350}
                    className="w-full h-auto rounded-lg"
                  /> */}

                  {/* using temp SVG */}
                  <DigitalizingValueInEquityCredit />
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div>
                <h4 className="text-2xl md:text-3xl font-medium leading-snug">
                  {pillar.heading}
                </h4>
                <ul className="mt-6 space-y-3">
                  {pillar.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CircleDot className="h-4 w-4 mt-1 text-blue-400 flex-shrink-0" />
                      <span className="text-indigo-200/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg">
                  Explore {pillar.tag}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-2/3 -bottom-60 z-0 overflow-hidden">
        <WaterfallSVG />        
      </div>
    </section>
  );
}