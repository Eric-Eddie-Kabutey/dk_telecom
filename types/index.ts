import { StaticImageData } from "next/image";

export type TeamMember = {
    id: string;
    name: string;
    is_board: boolean;
    title: string;
    img: StaticImageData;
    description: string[];
}