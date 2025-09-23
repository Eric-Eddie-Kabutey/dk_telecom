import Image from "next/image";
import { motion } from "framer-motion";

// --- Data Preparation ---
const logos = [
  { id: 1, src: "/assets/logos/sos-logo.png", alt: "SOS Logo" },
  { id: 2, src: "/assets/logos/etsth-logo.png", alt: "BSTH Group Logo" },
  { id: 3, src: "/assets/logos/brussels-logo.png", alt: "Brussels Airlines Logo" },
  { id: 4, src: "/assets/logos/turkish-airline-logo.png", alt: "Turkish Airlines Logo" },  
];

export function ClientLogos() {
    const infiniteLogos = [...logos, ...logos, ...logos, ...logos];
  return (
    <section className="pt-12">
      <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] px-6 overflow-hidden">        
        <motion.div
                    className="flex space-x-16 w-max"
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  >
                    {infiniteLogos.map((logo, index) => (
                      <div key={`${logo.id}-${index}`} className="w-fit h-10 flex items-center">
                        <Image
                          src={logo.src}
                                alt={`Brand logo ${index}`}
                                width={100}
                                height={100}
                          className="h-12 md:h-16 w-auto object-contain"
                        />
                      </div>
                    ))}
        </motion.div>
      </div>
    </section>
  )
}