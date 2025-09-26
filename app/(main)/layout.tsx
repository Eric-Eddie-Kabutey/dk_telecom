import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { generateMetadata } from "../metadata";
import ClientLayout from "./client-layout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = generateMetadata({
  title: "DK Telecom | Leading/Best Internet Service Provider in Gambia",
  description: "Enjoy fast and reliable internet in your home or office with dk internet.",
  url: "/",
});

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Heirstech",
  "url": "https://dk-telecom-sand.vercel.app/",
  "sameAs": [
    "https://www.instagram.com/dktelecom",
    "https://www.facebook.com/dktelecom",
    "https://twitter.com/dktelecom",
    "https://www.linkedin.com/company/dktelecom"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
