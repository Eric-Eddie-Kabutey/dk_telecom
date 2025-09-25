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
import { Article, Briefcase, Buildings, Calendar, ChartBar, DeviceMobile, Phone, Presentation, UserPlus, UsersThree, WifiHigh, Wrench } from "@phosphor-icons/react";


const links: { title: string; href: string; description: string, icon: React.ElementType, links?: { title: string; href: string; description: string; icon: React.ElementType }[] }[] = [
  
  {
    title: "Company",
    href: "/company",
    description: "Learn more about our mission, vision, and who we are.",
    icon: Buildings,
  },
  {
    title: "Service",
    href: "/services",
    description: "Explore the services we provide to individuals and businesses.",
    icon: Wrench,
    links: [
      {
        title: "Internet Services",
        href: "/internet-services",
        description: "Fast, reliable, and secure internet for homes and businesses.",
        icon: WifiHigh,
      },
      {
        title: "Digital Solutions",
        href: "/digital-solutions",
        description: "Innovative digital products tailored to your needs.",
        icon: DeviceMobile,
      },
    ],
  },
  {
    title: "Insights",
    href: "/insights",
    description: "Stay informed with our latest updates and expert analysis.",
    icon: ChartBar,
    links: [
      {
        title: "Blog",
        href: "/insights?tab=blog",
        description: "Articles on technology, connectivity, and industry trends.",
        icon: Article,
      },
      {
        title: "Case Studies",
        href: "/insights?tab=case-studies",
        description: "Deep dives into real client projects and success stories.",
        icon: Presentation,
      },
      {
        title: "Events",
        href: "/insights?tab=events",
        description: "Upcoming conferences, webinars, and community workshops.",
        icon: Calendar,
      },
    ],
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Be part of our journey and help shape the future of connectivity.",
    icon: Briefcase,
    links: [
      {
        title: "Join Us",
        href: "/careers",
        description: "Explore open positions and grow your career with us.",
        icon: UserPlus,
      },
      {
        title: "Talent Hub",
        href: "/dk-talent",
        description: "Connect with us and be part of our professional community.",
        icon: UsersThree,
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description: "Get in touch with our team for any questions or inquiries.",
    icon: Phone,
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
                      <ListItem
                        key={sublink.href}
                        href={sublink.href}
                        title={sublink.title}
                        icon={sublink.icon}
                      >
                        {sublink.description}
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

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string
  icon?: React.ElementType
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, icon: Icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "ibm flex items-start gap-3 rounded-md p-3 no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
              className
            )}
            {...props}
          >
            {Icon && (
              <div className="px-1 py-[1px] border border-[#c4c1e6]">
                <Icon size={26} weight="thin" className="shrink-0 mt-1" />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <div className="text-base font-medium leading-none text-[#140c59]">{title}</div>
              <p className="line-clamp-2 text-sm font-regular leading-snug text-[#140c59]">
                {children}
              </p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)

ListItem.displayName = "ListItem"
