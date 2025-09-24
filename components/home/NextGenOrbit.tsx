"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cornerOrbits = [
  { text: "Connectivity", position: "top-5 left-0 -translate-x-1/2 -translate-y-1/2", bgColor: "bg-yellow-500" },
  { text: "Security", position: "top-5 right-7 translate-x-1/2 -translate-y-1/2", bgColor: "bg-green-500" },
  { text: "Reliability", position: "-bottom-5 left-0 -translate-x-1/2 translate-y-1/2", bgColor: "bg-orange-500" },
  { text: "Scalability", position: "-bottom-5 right-7 translate-x-1/2 translate-y-1/2", bgColor: "bg-purple-500" },
];

export default function NextGenOrbit() {
  return (
    <div className="relative flex justify-center items-center h-[400px] lg:h-[500px] bg-transparent overflow-hidden">
      {/* 🔴 Expanding/collapsing red circle */}
      <motion.div
        className="absolute rounded-full border-2 border-red-500"
        initial={{ width: 256, height: 256 }}
        animate={{
          width: [256, 450, 256],
          height: [256, 450, 256],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🟡 Expanding/collapsing yellow circle */}
      <motion.div
        className="absolute rounded-full border-2 border-yellow-400"
        initial={{ width: 256, height: 256 }}
        animate={{
          width: [256, 300, 256],
          height: [256, 300, 256],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbit 1 (your main content with gradient border & central content) */}
      <div className="relative w-64 h-64 md:w-[284px] md:h-[284px] p-1 rounded-2xl  z-10">
        <div className="w-full h-full bg-[#130B54] rounded-full"></div>

        {/* Corner Orbits bg-gradient-to-br from-yellow-400/20 to-indigo-400/20 */}
        {cornerOrbits.map((orbit) => (
          <div
            key={orbit.text}
            className={`absolute w-10 h-10 rounded-full ${orbit.bgColor}  backdrop-blur-sm ${orbit.position}`}
          >
            <span className="text-lg text-white absolute top-8 left-0">
              {orbit.text}
            </span>
          </div>
        ))}
      </div>

      {/* Central Content */}
      <div className="absolute flex flex-col items-center text-center p-2 z-20">
        <Image
          src="/assets/images/dk_logo_white.png"
          alt="DK Telecom Ltd Logo"
          width={180}
          height={40}
        />
        <p className="mt-4 text-sm max-w-[250px] text-white">
          Empowering Your IT Infrastructure with Scalable, Secure, and Digital
          Reliable Solutions
        </p>
        <Link
          href="/solutions"
          className="mt-4 inline-flex items-center gap-2 font-semibold text-sm text-yellow-300 hover:text-yellow-200 transition-colors"
        >
          Discover More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
