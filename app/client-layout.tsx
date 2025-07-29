'use client';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { usePathname } from 'next/navigation';
import React from 'react'


function ClientLayout({children}: {children: React.ReactNode}) {
    const pathname = usePathname()

  return (
    <div className='w-full'>
        {!(pathname && pathname.includes('internet-plans')) && <Navbar />}
        <main>
            {children}
        </main>
        {!(pathname && pathname.includes('internet-plans')) && <Footer />}
    </div>
  )
}

export default ClientLayout