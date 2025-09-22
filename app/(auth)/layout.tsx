import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import PlansNavbar from "@/components/internet-plans/plans-navbar"
import PlansFooter from "@/components/internet-plans/plans-footer"

const inter = Inter({ subsets: ["latin"] })


export default function PlansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PlansNavbar />
        <main>
            {children}
        </main>
        <PlansFooter />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
