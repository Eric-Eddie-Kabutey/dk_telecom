"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Clock, InfinityIcon, Router } from "lucide-react";
import { motion } from "framer-motion";

// --- Data for the Services ---
const servicesData = {
  plans: {
    title: "Internet Plans",
    description: "Fast and a very affordable internet for every needs.",
    features: [
      { icon: Clock, text: "Up to 500 Mbps" },
      { icon: InfinityIcon, text: "Unlimited" },
      { icon: Router, text: "Router + priority support" },
    ],
  },
  payments: {
    bgImage: "/assets/images/welcome-img.png", 
    logoImage: "/assets/images/dk_logo_white.png", 
    title: "Internet Payments",
    description: "Simple, Secure and Flexible Bill Payments",
  },
  installations: {
    image: "/assets/images/internet-services/router-device.png", 
    title: "New Installations",
    description: "Quick Setup, anywhere you need internet.",
  },
};


export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-semibold text-blue-600 mb-2">Internet Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Made For You:
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-400 mt-1">
            Easy, Fast and Smart Payments.
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Tailored technology services to accelerate your business growth
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-[480px] md:grid-auto-rows-auto">
          
          {/* Card 1: Internet Plans */}
          <Link href="#internet-plans" className="block h-full">
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-black text-white rounded-3xl p-8 flex flex-col h-full shadow-lg"
            >
              <ul className="space-y-4 mb-6">
                {servicesData.plans.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-4">
                    <feature.icon className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-200">{feature.text}</span>
                  </li>
                ))}
              </ul>
              {/* Using flex-grow on a spacer div to push content to the bottom */}
              <div className="flex-grow"></div>
              <hr className="border-gray-700 my-4" />
              <div>
                <h4 className="text-xl font-semibold mb-2">{servicesData.plans.title}</h4>
                <p className="text-gray-400 text-sm">{servicesData.plans.description}</p>
              </div>
            </motion.div>
          </Link>

          {/* Card 2: Internet Payments */}
          <Link href="/login" className="block lg:h-full">
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden   h-72 lg:h-full shadow-lg group"
            >
              <Image
                src={servicesData.payments.bgImage}
                alt="Woman using phone for payments"
                fill
                className="object-cover z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10"></div>
              <div className="relative z-20">
                <Image
                  src={servicesData.payments.logoImage}
                  alt="DK Telecom Ltd Logo"
                  width={100}
                  height={40}
                />
              </div>
              <div className="relative z-20">
                <h4 className="text-xl font-semibold mb-2">{servicesData.payments.title}</h4>
                <p className="text-gray-300 text-sm">{servicesData.payments.description}</p>
              </div>
            </motion.div>
          </Link>

          {/* Card 3: New Installations */}
          <Link href="/new-installation" className="block h-full">
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-sky-200/60 text-gray-800 rounded-3xl p-2 flex flex-col h-full shadow-lg"
            >
              <div className="bg-transparent p-0 rounded-lg shadow-md mb-6 overflow-hidden group">
                <Image
                  src={servicesData.installations.image}
                  alt="Internet Router for new installation"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Using flex-grow to push the text content down */}
              <div className="flex-grow"></div>
              <div className="mt-auto py-4 lg:py-0">
                <h4 className="text-xl font-semibold mb-2">{servicesData.installations.title}</h4>
                <p className="text-gray-600 text-sm">{servicesData.installations.description}</p>
              </div>
            </motion.div>
          </Link>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-[#130B54] hover:bg-[#160B54] rounded-lg">
            <Link href='#' className="flex items-center gap-2">
              View Other Solutions
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}