"use client"
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Globe } from "lucide-react";
import Link from "next/link";
import dk_logo from "@/public/assets/images/dk_logo_white.png"
import Image from "next/image";
import Typography from "./typography";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { languages } from "@/constants";
import { MobileNav } from "./mobile"; 



export default function Navbar() {
    const [position, setPosition] = useState("EN")

    useEffect(() => {
        const addScript = () => {
          const script = document.createElement("script");
          script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
        };
      
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,ja,nl",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        };
      
        const checkLanguageFromCookie = () => {
          const match = document.cookie.match(/googtrans=\/en\/(\w{2})/);
          if (match && match[1]) {
            const currentLangCode = match[1];
            const activeLang = languages.find((l) => l.code === currentLangCode);
            if (activeLang) {
              setPosition(activeLang.label);
            }
          }
        };
      
        addScript();
        checkLanguageFromCookie();
      
        return () => {
          const scripts = document.querySelectorAll(
            'script[src*="translate.google.com"]'
          );
          scripts.forEach((script) => script.remove());
          window.googleTranslateElementInit = undefined;
        };
      }, []);

      const handleLanguageChange = (val: string) => {
        setPosition(val);
      
        const selectedLang = languages.find((l) => l.label === val);
        if (!selectedLang) return;
      
        const langCode = selectedLang.code;
      
        document.cookie = `googtrans=/en/${langCode};path=/`;
      
        window.location.reload();
      };
    return (
        <header className="py-2 sticky top-0 z-50 px-4 flex flex-col justify-center bg-[#130B54] text-white">
            {/* bg-background/60 backdrop-blur-md */}
            {/* <div className=" absolute left-0 h-full w-full transparent"></div> */}
            <div className="max-container relative 2xl:w-[85%] w-[95%] mx-auto">
                <NavbarComponent>
                    <NavbarLeft>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold"
                        >
                            <Image 
                                src={dk_logo}
                                alt="Heirs logo"
                                className="w-fit md:h-12 h-8"
                            />                           
                        </Link>
                    </NavbarLeft>
                    <Navigation />
                    <NavbarRight>
                        
                        <Button variant="outline" asChild className="sm:flex hidden">
                            <Link href="/locate-branch"
                                className="pops text-white md:text-base text-sm font-light bg-transparent rounded-lg hover:text-white"
                            >Locate Branch</Link>
                        </Button>
                        <Button variant="primary" asChild className="sm:flex hidden">
                            <Link 
                                href="/login"
                                className="pops bg-orange-500 rounded-lg"
                            >Customer Portal</Link>
                        </Button>
                        <div className="">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                <div className="flex items-center cursor-pointer">
                                    <Globe size={18} color="#6B6B6D" />
                                    <Button variant="default" className="w-fit px-2 text-[#6B6B6D] bg-transparent hover:bg-transparent shadow-none">
                                    {position}
                                    </Button>
                                </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[250px]">
                                  <DropdownMenuRadioGroup
                                      value={position}
                                      onValueChange={handleLanguageChange}
                                      className="p-4 grid gap-2"
                                  >
                                      {languages.map((lang) => (
                                      <DropdownMenuRadioItem
                                          key={lang.id}
                                          value={lang.label}
                                          className="flex items-center gap-2"
                                      >
                                          <div className="w-5 h-fit">
                                          <Image
                                              src={lang.flag}
                                              alt={lang.name}
                                              className="w-full h-full"
                                          />
                                          </div>
                                          <Typography
                                            typo="body-medium-regular"
                                          >{lang.name}</Typography>
                                      </DropdownMenuRadioItem>
                                      ))}
                                  </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>    
                        {/* mobile navigation */}
                        <MobileNav />                        
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
