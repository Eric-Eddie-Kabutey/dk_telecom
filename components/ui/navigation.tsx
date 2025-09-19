"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";


const links: { title: string; href: string; description: string, links?: { title: string; href: string; description: string }[] }[] = [
  
  {
    title: "Company",
    href: "/company",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Service",
    href: "/services",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    links: [
      {
        title: "Internet services",
        href: "/internet-services",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        title: "Digital solutions",
        href: "/digital-solutions",
        description:
          "How to install dependencies and structure your app.",
      },
    ]
  },
  {
    title: "Insights",
    href: "/insights",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    links: [
      {
        title: "Blog",
        description: "In-depth analyses of our client projects showcasing challenges, solutions, and ",
        href: "/insights?tab=blog"
      },
      {
        title: "Case Studies",
        description: "In-depth analyses of our client projects showcasing challenges, solutions, and ",
        href: "/insights?tab=case-studies"
      },
      {
        title: "Events",
        description: "Upcoming webinars, conferences, and workshops where we share ",
        href: "/insights?tab=events"
      }
    ]
  },
  {
    title: "Careers",
    href: "/careers",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    links: [
      {
        title: "Join Us",
        description: "In-depth analyses of our client projects showcasing challenges, solutions, and ",
        href: "/careers"
      },
      {
        title: "Talent Hub",
        description: "In-depth analyses of our client projects showcasing challenges, solutions, and ",
        href: "/talent-hub"
      },
  
    ]
  },
  {
    title: "Contact us",
    href: "/contact-us",
    description:
      "Get in touch with our team for any questions or inquiries.",
  },
];

export default function Navigation() {
  
  return (
    <NavigationMenu className="pops font-light hidden lg:flex">
      <NavigationMenuList>
        {
          links.map((link) => (
            link.links ? (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger>
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[400px] ">
                    {link.links.map((sublink) => (
                      <ListItem key={sublink.href} href={sublink.href} title={sublink.title}>
                        {/* {sublink.description} */}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title={link.description}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          ))
        }
        
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
