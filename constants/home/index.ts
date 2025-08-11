import client_1 from "@/public/assets/images/Partner_logos/Brussels_airlines.jpg"
import client_2 from "@/public/assets/images/Partner_logos/CFA-Logo_RGB_hi-res.png"
import client_3 from "@/public/assets/images/Partner_logos/GCCI2.webp"
import client_4 from "@/public/assets/images/Partner_logos/GIA.png"
import client_5 from "@/public/assets/images/Partner_logos/IOM.png"
import client_6 from "@/public/assets/images/Partner_logos/MORLG_Logo.png"
import client_7 from "@/public/assets/images/Partner_logos/Millennium_Challenge_corporation.png"
import client_8 from "@/public/assets/images/Partner_logos/Ministry_of_Defence.png"
import client_9 from "@/public/assets/images/Partner_logos/Ministry_of_interior.png"
import client_10 from "@/public/assets/images/Partner_logos/NEA.png"
import client_11 from "@/public/assets/images/Partner_logos/Red_Cross.jpg"
import client_12 from "@/public/assets/images/Partner_logos/Trust_Bank.jpg"
import client_13 from "@/public/assets/images/Partner_logos/Trust_Bank_tree.jpg"
import client_14 from "@/public/assets/images/Partner_logos/Turkish_Airlines.png"
import client_15 from "@/public/assets/images/Partner_logos/UTG.png"
import client_16 from "@/public/assets/images/Partner_logos/ministry_of_communications_and_digital_economy.png"
import client_17 from "@/public/assets/images/Partner_logos/sosgambialogo_original.png"

import service_1 from "@/public/assets/images/home/home_service-1.png"
import service_2 from "@/public/assets/images/home/home_service-2.png"

import case_study_1 from "@/public/assets/images/home/case-studies-1.png"
import case_study_2 from "@/public/assets/images/home/case-studies-2.png"
import case_study_3 from "@/public/assets/images/home/case-studies-3.png"

import test1 from "@/public/assets/images/home/testimonial-1.png";
import test2 from "@/public/assets/images/home/testimonial-2.png";
import test3 from "@/public/assets/images/home/testimonial-3.png";

import hero_1 from "@/public/assets/images/home/hero_img.png"
import hero_2 from "@/public/assets/images/home/hero_1.png"
import hero_3 from "@/public/assets/images/home/hero_2.png"
import hero_4 from "@/public/assets/images/home/hero_3.png"
import hero_5 from "@/public/assets/images/home/hero_4.png"
import hero_6 from "@/public/assets/images/home/hero_5.jpg"

import ghanaFlag from "@/public/assets/images/flags/ghana_flag.png";
import gambiaFlag from "@/public/assets/images/flags/gambia_flag.png";

export const country_flags = [
    {
        id: "1",
        country : "Ghana",
        img: ghanaFlag,
    },
    {
        id: "2",
        country : "Gambia",
        img: gambiaFlag,
    },
    {
        id: "3",
        country : "Germany",
        img: ghanaFlag,
    },
    {
        id: "4",
        country : "Kenya",
        img: gambiaFlag,
    },
]

export const hero_images = [hero_6, hero_1, hero_2, hero_3, hero_4, hero_5]

export const internet_services = [
    {
        id: "1",
        href: "/internet-plans",
        img: test1,
        title: "Internet plans",
        sub_title: "Fast affordable internet for every need.",
    },
    {
        id: "2",
        href: "/",
        img: test2,
        title: "Internet Payments",
        sub_title: "Simple, secure, and flexible bill payments.",
    },
    {
        id: "3",
        href: "/new-installation",
        img: test3,
        title: "New Installation",
        sub_title: "Quick setup, anywhere you need internet.",
    },
    {
        id: "4",
        href: "/",
        img: service_1,
        title: "Request Support",
        sub_title: "Friendly help whenever you need it.",
    },
]

export const testimonial_clients = [
    {
        id: "1",
        logo: client_6,
        img: test1,
        name: "Catherine Nwosu",
        position: "Managing Director / CEO",
        description: `"Heirs Technologies impressed me with their professionalism, expertise, and dedication. Their skilled 
                        team provided tailored IT solutions, delivering strategic insights that significantly reduced our 
                        infrastructure costs."`,
    },
    {
        id: "2",
        logo: client_5,
        img: test2,
        name: "Akosa Onyebuchi",
        position: "Group Chief Information Officer",
        description: `Heirs Technologies recruitment demonstrates a level of honesty, skill and due care not always found in 
                        the industry. In times of need, I have always turned to this company to fill several vacancies from 
                        software engineers to senior Technical leads, and my company has been the richer for it.`,
    },
    {
        id: "3",
        logo: client_3,
        img: test3,
        name: "Mayowa Adebayo",
        position: "Managing Director / CEO",
        description: `Resources from Heirs Technologies have been a great help to The Switch. We have had a lot of development 
                        and deliveries all thanks to their help`,
    },
]

export const case_studies = [
    {
        id: "1",
        img: case_study_1,
        header: "Financial Sector",
        title: "Revolutionizing Branch Efficiency for a Leading Bank",
        description: `Our client is a prominent banking institution with an extensive network of over 200 physical branches...`,
    },
    {
        id: "2",
        img: case_study_2,
        header: "Financial Sector",
        title: "Elevating IT Talent Solutions for Enhanced Client Success",
        description: `Our clients are major industry players in the financial sector and are continuously deploying IT solutions to enhance...`,
    },
    {
        id: "3",
        img: case_study_3,
        header: "Financial Sector",
        title: "Vulnerability Assessment and Penetration Testing (VAPT) for Two Clients",
        description: `Client A is a prominent government agency responsible for managing critical infrastructure and sensitive citizen data...`,
    },
]

export const our_services = [
    // {
    //     id: "1",
    //     img: service_1,
    //     bg_color: "#53565A",
    //     title: "Internet Services",
    //     sub_title: "Redefining Business Success with Digital-First Strategies",
    //     description:
    //         `Transform your operations, unlock efficiency, and achieve measurable outcomes with our bespoke consulting solutions.`,
    // },
    {
        id: "2",
        img: service_2,
        bg_color: "#E7E7E7",
        title: "Digital Solution",
        sub_title: `Empowering Your IT Infrastructure with Scalable, Secure, and Reliable Solutions`,
        description:
            `At Heirs Technologies, we provide comprehensive managed IT services designed to optimise, secure, and scale your IT operations seamlessly.`,
    },
]

export const clients_logo = [
    {
        id: "1",
        img: client_1,
    },
    {
        id: "2",
        img: client_2,
    },
    {
        id: "3",
        img: client_3,
    },
    {
        id: "4",
        img: client_4,
    },
    {
        id: "5",
        img: client_5,
    },
    {
        id: "6",
        img: client_6,
    },
    {
        id: "7",
        img: client_7,
    },
    {
        id: "8",
        img: client_8,
    },
    {
        id: "9",
        img: client_9,
    },
    {
        id: "10",
        img: client_10,
    },
    {
        id: "11",
        img: client_11,
    },
    {
        id: "12",
        img: client_12,
    },
    {
        id: "13",
        img: client_13,
    },
    {
        id: "14",
        img: client_14,
    },
    {
        id: "15",
        img: client_15,
    },
    {
        id: "16",
        img: client_16,
    },
    {
        id: "17",
        img: client_17,
    },
]