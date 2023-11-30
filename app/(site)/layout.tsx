import type { Metadata } from 'next'
import { Inter, Titillium_Web } from 'next/font/google'
import '../globals.css'
import NavBar from '@/app/(site)/components/global/NavBar'
import { Suspense } from 'react'
import Footer from '@/app/(site)/components/global/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
export const titillium = Titillium_Web({
  weight:['200', '300', '400', '600', '700', '900'],
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
    {href: '/about', title: 'About Me'},
    {href: '/projects', title: 'My Projects'},
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${titillium.className} text-center h-full selection:bg-gray-100 relative`}>
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
