import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import PlansFooter from "@/components/internet-plans/plans-footer"
import Navbar from "@/components/shared/Navbar"

const inter = Inter({ subsets: ["latin"] })


export default function InternetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main>
            {children}
        </main>
        <PlansFooter />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'DK Telecom Internet Plans'
    };
