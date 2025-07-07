import { Metadata } from "next";

interface MetadataProps {
    title: string;
    description: string;
    url?: string;
}

export function generateMetadata({
    title = "Heirstech | Empowering Businesses with Tailored Tech Solutions",
    description = "Heirstech delivers cutting-edge digital solutions to empower businesses, offering expertise in software development, API integration, and cloud technologies.",
    url = "/",
}: MetadataProps): Metadata {
    const defaultUrl = process.env.WEBAPP_URL || 'https://heirstechnologies.vercel.app/';
    return {
        title: { default: title, template: "%s | Empowering Businesses with Tailored Tech Solutions" },
        description: description,
        applicationName: "Heirstech",
        authors: [{ name: "Heirstech Team", url: process.env.WEBAPP_URL || 'https://heirstechnologies.vercel.app/' }],
        generator: "Next.js",
        keywords: ["software development", "API integration", "cloud technologies", "UI/UX design", "DevOps", "business solutions", "technology services", "tailored tech solutions"],
        referrer: "origin",
        creator: "Heirstech Team",
        publisher: "Heirstech",
        robots: "index, follow",
        alternates: {
            canonical: `${defaultUrl}${url}`,
            types: {
                "application/rss+xml": [{ url: "/feed/rss.xml", title: "RSS Feed" }]
            }
        },
        icons: {
            icon: "/icon-192x192.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/manifest.json",
        openGraph: {
            type: "website",
            url: process.env.WEBAPP_URL || 'https://heirstechnologies.vercel.app/',
            title: title,
            description: description,
            siteName: "Heirstech",
            images: [
                {
                    url: `${process.env.WEBAPP_URL}/logo.png`,
                    width: 1200,
                    height: 630,
                    alt: "Heirstech - Empowering Businesses with Tailored Tech Solutions",
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@Heirstech",
            creator: "@ktechhub",
            title: title,
            description: description,
            images: "https://heirstechnologies.vercel.app//twitter-image.png"
        },
        verification: {
            google: "9skpBpwKDtj0DYmqZppulq6euNwztgaLg6JZc4_RZ-g",
            yandex: "73ac4b10761bb219"
        },
        appleWebApp: {
            capable: true,
            title: "Heirstech",
            statusBarStyle: "black-translucent",
        },
        formatDetection: {
            telephone: false
        },
        abstract: "Heirstech delivers cutting-edge digital solutions to empower businesses, offering expertise in software development, API integration, and cloud technologies.",
        archives: ["https://heirstechnologies.vercel.app//archives"],
        assets: ["https://heirstechnologies.vercel.app//assets"],
        bookmarks: ["https://heirstechnologies.vercel.app//bookmarks"],
        category: "Technology, Business Solutions",
        classification: "Digital Transformation Services",
        // other: {
        //   "msapplication-TileColor": "#2b5797",
        //   "msapplication-config": "/icons/browserconfig.xml"
        // }
    }
}
