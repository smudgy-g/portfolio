import type { Metadata } from 'next'
import { Inter, Titillium_Web, Poppins } from 'next/font/google'
import '../globals.css'
import { Suspense } from 'react'
import NavBar from '@/components/global/NavBar'


const poppins = Poppins({ 
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  subsets: ['latin'], 
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'Adam Griffiths - Software Developer',
  description: 'Portfolio of Adam Griffiths, Full-Stack Software Developer. Specializing in Javascript technologies with a focus on Next.js, Node.js and React for innovative solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} w-screen text-center relative`}>
          <Suspense>
            {/* <NavBar routes={routes} /> */}
            <NavBar />
          </Suspense>
        <main className="w-full h-[calc(100dvh)] overflow-auto snap-y snap-mandatory scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  )
}
