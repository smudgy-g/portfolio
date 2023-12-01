import type { Metadata } from 'next'
import { Inter, Titillium_Web, Poppins } from 'next/font/google'
import '../globals.css'
import NavBar from '@/components/global/NavBar'
import { Suspense } from 'react'
import Footer from '@/components/global/Footer'


const poppins = Poppins({ 
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ['latin'], 
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'Adam Griffiths - Software Developer',
  description: 'The personal portfolio site of Adam Griffiths. Bootstrapped with Next.js with headless Sanity CMS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const routes = [
    {href: '/', title: 'Home'},
    {href: '/resume', title: 'My Resumé'},
    {href: '/projects', title: 'My Projects'},
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-cream text-light-slate text-center h-full relative`}>
        <Suspense>
          <NavBar routes={routes} />
        </Suspense>
        <main className="mx-auto">
          {children}
        </main>
        <Suspense>
          <Footer  routes={routes} />
        </Suspense>
      </body>
    </html>
  )
}
