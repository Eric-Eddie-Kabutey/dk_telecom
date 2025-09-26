import { Metadata } from "next";

interface MetadataProps {
    title: string;
    description: string;
    url?: string;
}

export function generateMetadata({
    title = "Dk Telecom | Leading/Best Internet Service Provider in Gambia",
    description = "Enjoy fast and reliable internet in your home or office with dk internet.",
    url = "/",
}: MetadataProps): Metadata {
    const defaultUrl = process.env.WEBAPP_URL || 'https://dk-telecom-sand.vercel.app/';
    return {
        title: { default: title, template: "%s | Leading/Best Internet Service Provider in Gambia" },
        description: description,
        applicationName: "DK Telecom",
        authors: [{ name: "DK Telecom Team", url: process.env.WEBAPP_URL || 'https://dk-telecom-sand.vercel.app/' }],
        generator: "Next.js",
        keywords: ["internet service provider", "internet for home", "internet for office", "fast internet in Gambia", "best internet service provider", "cheap/affordable internet, Gambia", "dk telecom", "best web designer"],
        referrer: "origin",
        creator: "DK Telecom Team",
        publisher: "DK Telecom",
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
            url: process.env.WEBAPP_URL || 'https://dk-telecom-sand.vercel.app/',
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
            images: "https://dk-telecom-sand.vercel.app/twitter-image.png"
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
        abstract: "Enjoy fast and reliable internet in your home or office with dk internet.",
        archives: ["https://dk-telecom-sand.vercel.app/archives"],
        assets: ["https://dk-telecom-sand.vercel.app/assets"],
        bookmarks: ["https://dk-telecom-sand.vercel.app/bookmarks"],
        category: "Internet, Business Solutions",
        classification: "Digital Solutions",
    }
}
