import { StaticImageData } from "next/image";

export type TeamMember = {
    id: string;
    name: string;
    is_board: boolean;
    title: string;
    img: StaticImageData;
    description: string[];
}

export type CaseStudies = {
    id: number;
    title: string;
    href: string;
    imageUrl: StaticImageData | string;
    imageAlt: string;
    tag: string;
    description: string;
}

export type ProblemData = {
    id: number;
    text: string;
}