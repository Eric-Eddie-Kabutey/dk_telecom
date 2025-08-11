"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { clients_logo } from "@/constants/home";
import Typography from "../shared/typography";


const HomeClients = () => {
  const tripleLogos = [...clients_logo, ...clients_logo, ...clients_logo];
  return (
    <div className="w-full lg:py-16 py-8">
      <section className=" max-container 2xl:w-[85%] w-[90%] mx-auto overflow-hidden flex flex-col gap-12">
        <Typography
            typo="header-5-medium"
        >Clientele</Typography>
        <motion.div
          className="flex space-x-16 w-max"
          animate={{ x: ["0", "-33.3333%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {tripleLogos.map((logo, index) => (
            <div key={logo.id} className="w-fit h-10 flex items-center md:justify-center text-gray-500">
              <Image 
                src={logo.img}
                alt={`Brand logo ${index}`}
                className="w-full h-full filter  grayscale"
              />
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default HomeClients;