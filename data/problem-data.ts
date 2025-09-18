import { ChevronsUp, ShieldCheck, User, Zap } from "lucide-react";

export const problemsData = [
    {
        id: 1,
        problem: {
            icon: User,
            text: "Instantly launch secure applications across cloud environments with enterprise-grade reliability.",
        },
        solution: {
            icon: Zap,
            title: "Lightning-Speed Connectivity – 10Gbps+",
            description: "Experience ultra-fast broadband that powers video calls, streaming, and business operations without lag.",
        },
    },
    {
        id: 2,
        problem: {
            icon: User,
            text: "Struggling to scale your network infrastructure on-demand without performance loss?",
        },
        solution: {
            icon: ChevronsUp,
            title: "Elastic Scalability Engine",
            description: "Our infrastructure grows with your business, ensuring peak performance during high-traffic periods automatically.",
        },
    },
    {
        id: 3,
        problem: {
            icon: User,
            text: "Concerned about network security threats and ensuring data integrity across your enterprise?",
        },
        solution: {
            icon: ShieldCheck,
            title: "Ironclad Security Fortress",
            description: "Multi-layered security protocols, including DDoS mitigation and end-to-end encryption, keep your data safe.",
        },
    },
];