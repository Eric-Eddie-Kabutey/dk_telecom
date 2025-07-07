"use client"
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import heirs_logo from "@/public/assets/images/heirstech.png"
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="py-2 sticky top-0 z-50 px-4 flex flex-col justify-center">
            <div className=" absolute left-0 h-full w-full bg-background/60 backdrop-blur-md"></div>
            <div className="max-container relative 2xl:w-[85%] w-[95%] mx-auto">
                <NavbarComponent>
                    <NavbarLeft>
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold"
                        >
                            <Image 
                                src={heirs_logo}
                                alt="Heirs logo"
                                className="w-fit sm:h-10 h-6"
                            />
                            {/* <Typography
                                typo="header-6-semibold"
                                className="public"
                            >
                                Heirs Technologies
                            </Typography> */}
                        </Link>
                    </NavbarLeft>
                    <Navigation />
                    <NavbarRight>
                        
                        <Button variant="outline" asChild>
                            <Link href="/"
                                className="pops text-app-primary font-light bg-transparent"
                            >Contact us</Link>
                        </Button>
                        
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 text-xl font-bold"
                                    >
                                        <span>Heirs Technologies</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Getting Started
                                    </Link>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Components
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Contact Us
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
