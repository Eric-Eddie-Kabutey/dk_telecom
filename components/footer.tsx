import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import white_logo from "@/public/assets/images/dk_logo_white.png";

// --- Data for Footer Links ---
const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
];

const serviceLinks = [
  { href: "/internet-services", label: "DK Internet" },
  { href: "/digital-solutions", label: "Digital Solutions" },
  { href: "/talent-hub", label: "DK TalentHub" },
];



const socialLinks = [
  { href: "#", label: "X", icon: "/assets/logos/x.png" },
  { href: "#", label: "LinkedIn", icon: "/assets/logos/linkedin.png" },
  { href: "#", label: "Instagram", icon: "/assets/logos/instagram.png" },
  { href: "#", label: "GitHub", icon: "/assets/logos/github.png" },
];


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8 mb-12">
          
          {/* Column 1: Contact & Socials (Spans more width on larger screens) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-8">
            <Image
              src={white_logo}
              alt="DK Telecom Ltd. Logo"
              width={180}
              height={40}
            />
            <div className="relative max-w-sm">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white border-gray-700 rounded-xl h-14 pr-16 text-black placeholder:text-gray-700 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 md:w-14 bg-[#0D55A5] hover:bg-[#0D55A2] rounded-lg">
                <ArrowRight className="h-5 w-5" />
                <span className="sr-only">Submit email</span>
              </Button>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-4">Follow us on</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800/60 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                        <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
              </div>
          </div>

          {/* Spacer Column for better desktop layout */}
          <div className="hidden lg:block"></div>

          {/* Column 2: Company Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Our Service</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-gray-800" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} DK Telecom ltd.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms and conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}