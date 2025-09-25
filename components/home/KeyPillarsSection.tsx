"use client";

import { Button } from "@/components/ui/button";
import { CircleDot } from "lucide-react";
import { HeaderPillLine } from "../shared/HeaderPillLine";
import WaterfallSVG from "../svg/waterfall-svg";
import Image from "next/image";
import { Bank, Broadcast, Buildings } from "@phosphor-icons/react";


// --- Data for the Platform Pillars ---
const pillarsData = [
  {
    id: "value",
    tag: "73 Value",
    icon: Buildings,
    title: "For Government",
    imageUrl: "/assets/images/government-solutions.jpg", // 
    heading: "Government and public sector solutions",
    features: [
      {
        id: "1",
        title: "Smart Governance",
        description: `E-government platforms that digitize public services, enhance transparency, and improve citizen engagement.`,
      },
      {
        id: "2",
        title: "Data & AI Management",
        description: `City-wide data platforms with AI analytics for urban planning, resource allocation, and policy decision support.`,
      },
      {
        id: "3",
        title: "Public Safety",
        description: `Integrated emergency response systems with real-time monitoring, dispatch coordination, and situational awareness.`,
      },
    ],
  },
  {
    id: "monitor",
    tag: "73 Monitor",
    icon: Bank,
    title: "For Financial Institutions",
    imageUrl: "/assets/images/finance-solutions2.jpg", 
    heading: "Financial technology solutions",
    features: [
      {
        id: "1",
        title: "AI-Powered Risk Analytics",
        description: `Leverage AI and machine learning models to assess credit risk, detect fraud, and monitor portfolio performance in real-time.`,
      },
      {
        id: "2",
        title: "Automated Compliance & Reporting",
        description: `Streamline regulatory compliance and audit processes with real-time monitoring, data traceability, and automated reporting tools.`,
      },
      {
        id: "3",
        title: "Client Intelligence & Personalization",
        description: `Analyze transaction data and customer behavior to deliver personalized financial products and improve client engagement.`,
      },
    ],
  },
  {
    id: "extract",
    tag: "73 Extract",
    icon: Broadcast,
    title: "For Telecom",
    imageUrl: "/assets/images/telecom-solutions.jpg", 
    heading: "Tailored networking and telecom solutions",
    features: [
        {
          id: "1",
          title: "AI-Driven Network Optimization",
          description: `Use real-time analytics and predictive AI models to enhance network performance, reduce downtime, and improve user experience.`,
        },
        {
          id: "2",
          title: "Customer Experience Analytics",
          description: `Gather insights from usage patterns, support interactions, and feedback to improve service quality and reduce churn.`,
        },
        {
          id: "3",
          title: "Network Resilience & Emergency Services",
          description: `Ensure communication continuity during critical events with robust, secure, and intelligent disaster recovery systems.`,
        },
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
              Future-Ready Digital Solutions for Institutions
            </h2>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-20">
          {pillarsData.map((pillar) => (
            <div key={pillar.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Visual Card */}
              <div className="flex flex-col items-center">
                <div className="bg-[#130B54] border border-yellow-400 px-6 py-5 -mb-8 rounded-t-lg shadow-lg z-10">
                  <span className="font-semibold text-lg">
                    <pillar.icon size={40} weight="light" />
                  </span>
                </div>
                <div className="bg-white pt-12 px-8 rounded-b-2xl rounded-tr-2xl shadow-xl w-full">
                  <p className="text-center mb-4  md:mb-6 text-[#130B54] text-lg">{pillar.title}</p>
                  <Image
                    src={pillar.imageUrl}
                    alt={`${pillar.tag} dashboard preview`}
                    width={550}
                    height={350}
                    className="w-full h-auto rounded-lg"
                  />

                  {/* using temp SVG */}
                  {/* <DigitalizingValueInEquityCredit /> */}
                </div>
              </div>

              {/* Right Column: Text Content */}
              <div>
                <h4 className="text-2xl md:text-3xl font-medium leading-snug">
                  {pillar.heading}
                </h4>
                <ul className="mt-6 space-y-3">
                  {pillar.features.map((feature, index) => (
                    <div 
                      key={feature.id}
                      className="flex flex-col gap-2"
                    >
                        <li key={index} className="flex items-start gap-3">
                          <CircleDot className="h-4 w-4 mt-1 text-blue-400 flex-shrink-0" />
                          <span className="text-indigo-200/90">{feature.title}</span>
                        </li>
                        <span className="pl-6 text-gray-300">
                          {feature.description}
                        </span>
                      </div>
                  ))}
                </ul>
                <Button size="lg" className="mt-8 bg-yellow-400 text-black hover:bg-yellow-500 rounded-lg">
                  Get In touch
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