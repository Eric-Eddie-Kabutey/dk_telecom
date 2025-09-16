"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

import dk_logo from "@/public/assets/images/dk_logo_blue.png"
import back_arrow from "@/public/assets/icons/back-arrow.png"



// types for navData
type NavItem = {
  label: string;
  href?: string;
  submenu?: MenuKey;
};

type NavData = {
  [key in MenuKey]: NavItem[];
};

// --- Data Structure for Navigation ---
const navData: NavData = {
  main: [
    { label: 'Company', href: '/company' },
    { label: 'Services', submenu: 'services' },
    { label: 'Insights', submenu: 'insights' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  services: [
    { label: 'Internet Services', href: '/internet-services' },
    { label: 'Digital Solutions', href: '/digital-solutions' },
  ],
  insights: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Events', href: '/events' },
  ],
};

type MenuKey = 'main' | 'services' | 'insights';

export function MobileNav() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>('main');

  const handleMenuClick = (submenuKey: MenuKey) => {
    setActiveMenu(submenuKey);
  };

  const handleBackClick = () => {
    setActiveMenu('main');
  };
  
  const currentLinks = navData[activeMenu];
  const isSubMenu = activeMenu !== 'main';

  return (
    <Sheet onOpenChange={(isOpen) => !isOpen && setActiveMenu('main')}>
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
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
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
          <SheetClose asChild>
             <Button variant="ghost" size="icon">
                <X className="h-10 w-10" />
                <span className="sr-only">Close menu</span>
              </Button>
          </SheetClose>
        </SheetHeader>
        
        <div className="flex-grow flex flex-col items-center">
          {isSubMenu && (
            <div className="self-start mb-8 pl-4">
              <Button variant="ghost" onClick={handleBackClick} className="self-start flex items-start text-lg text-gray-700 p-0 h-auto hover:bg-transparent">                              
                    {/* back arrow icon */}
                    <Image 
                        src={back_arrow}
                        alt="Back arrow"
                        width={24}
                        height={24}
                    />                
              </Button>
            </div>
          )}
          
          <nav className="flex flex-col items-center gap-8 text-2xl font-medium text-gray-800">
            {currentLinks.map((item) => (
              item.submenu ? (
                // This is a button that triggers a submenu
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.submenu as MenuKey)}
                  className="flex items-center justify-between w-full max-w-xs hover:text-blue-600"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-6 w-6" />
                </button>
              ) : (
                // This is a direct link
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href!}
                    className="w-full max-w-xs text-center hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              )
            ))}
          </nav>

          {!isSubMenu && (
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
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}