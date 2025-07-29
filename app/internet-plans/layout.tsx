import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import InternetNavbar from "@/components/internet-services/internet-navbar"
import InternetFooter from "@/components/internet-services/internet-footer"

const inter = Inter({ subsets: ["latin"] })


export default function InternetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <InternetNavbar />
        <main>
            {children}
        </main>
        <InternetFooter />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
