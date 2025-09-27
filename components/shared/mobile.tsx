"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

import dk_logo from "@/public/assets/images/dk_logo_blue.png"
import back_arrow from "@/public/assets/icons/back-arrow.png"
import { Accordion } from "../ui/accordion-faqs";
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Article, Binoculars, Briefcase, Building, Calendar, FileText, Globe, Phone, PuzzlePiece, Rocket } from "@phosphor-icons/react";


const navItems = [
  {
    id: "1",
    label: "Company",
    href: '/company',
    icon: Building,
  },
  {
    id: "2",
    label: 'Services',
    icon: PuzzlePiece,
    contents: [
      {
        id: "1",
        label: 'Internet Services',
        href: '/internet-services',
        icon: Globe,
      },
      {
        id: "2",
        label: 'Digital Solutions',
        href: '/digital-solutions',
        icon: Rocket, 
      },
    ]
  },
  {
    id: "3",
    label: 'Insights',
    icon: Binoculars,
    contents: [
      {
        id: "1",
        label: 'Blog',
        href: '/insights?tab=blog',
        icon: Article,
      },
      {
        id: "2",
        label: 'Case Studies',
        href: '/insights?tab=case-studies',
        icon: FileText,
      },
      {
        id: "3",
        label: 'Events',
        href: '/insights?tab=events',
        icon: Calendar,
      },
    ]
  },
  {
    id: "4",
    label: 'Careers',
    href: '/careers',
    icon: Briefcase,
  },
  {
    id: "5",
    label: 'Contact Us',
    href: '/contact-us',
    icon: Phone,
  },
]


export function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleNavItemClick = () => {
          setSheetOpen(false);
  };


  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full flex flex-col py-4">
        <SheetHeader className="flex flex-row items-center justify-between pb-10 border-b">
          <SheetTitle asChild>
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src={dk_logo} 
                alt="DK Telecom logo"
                width={60}
                height={25}
              />
            </Link>
          </SheetTitle>
          
        </SheetHeader>
        
        <div className="flex-grow flex flex-col items-center">
          
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((navItem, index) => (
                navItem.contents ? (
                  <AccordionItem key={navItem.id} value={`item-${index+1}`}>
                    <AccordionTrigger className="text-black">
                      <div className="flex justify-start items-center gap-2">
                        <span>{navItem.label}</span>
                      </div>
                    </AccordionTrigger>
                    {navItem.contents.map((item) => (
                      <AccordionContent key={item.id} className="pl-4">
                        <Link 
                          href={item.href} 
                          onClick={handleNavItemClick}
                          className="flex items-center gap-3 hover:text-blue-600 transition-colors"
                        >
                          <item.icon size={16} />
                          <span>{item.label}</span>
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                ) : (
                  <div key={navItem.id} className="border-b last:border-b-0">
                    <Link 
                      href={navItem.href!}
                      onClick={handleNavItemClick}
                      className="flex items-center gap-2 py-4 hover:bg-gray-50 transition-colors text-black"
                    >
                      {/* <navItem.icon size={20} /> */}
                      <span>{navItem.label}</span>
                    </Link>
                  </div>
                )
              ))}
            </Accordion>
          </div>

          <div className="mt-auto flex flex-col items-center w-full gap-4 pt-4">
            <SheetClose asChild>
              <Button variant="outline" className="w-full max-w-xs h-12 text-lg border-gray-300 rounded-lg">
                Locate Branch
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="w-full max-w-xs h-12 text-lg bg-blue-700 hover:bg-blue-800 rounded-lg">
                Customer Portal
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}