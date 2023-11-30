"use client"

import { Transition, Disclosure } from "@headlessui/react"
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { Fragment, useState } from 'react'
import Logo from '../icons/logo.png'
import RainbowLogo from '../icons/rainbow_logo.png'
import NavLink from "../shared/NavLink"
import { Route } from "@/types"

export default function NavBar({ routes }: { routes: Route[] }) {
  let pathname = usePathname() || "/"
  const [open, setOpen] = useState(false)

  

  function handleClick() {
    setOpen(!open)
  }

  return (
    <header className="fixed flex justify-between items-center text-left px-8 md:px-12 top-0 w-full z-50 h-[100px] bg-blue md:bg-transparent ">
         
      <Link href="/" className="z-[999]">
        <Image src={open ? RainbowLogo : Logo} height={50} width={50} alt="logo for Adam Grifftihs" />
      </Link>
      
      
      <button 
        onClick={handleClick}
        className="text-white md:text-blue z-[999] inline-flex border border-transparent p-2 mr-4 hover:border-blue focus:outline-none focus:ring-2 focus:ring-inset focus: ring-blue"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-dark-blue">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      <nav className={`${open ? "visible" : "hidden"} fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-white text-lg flex flex-col justify-around z-[49] p-14 lg:top-6 lg:left-auto lg:right-14 lg:w-fit lg:h-fit lg:text-sm transition-all duration-500 ease-in-out`}>
        <ul className="my-5">
          {routes.map((route, index) => (
            <li 
              className="relative"
              key={`nav-item-${index}`}>
              <Link
                href={route.href}
                prefetch
                onClick={handleClick}
                className="text-dark-blue leading-10 relative transition-all duration-300 ease-in-out bg-transparent after:content-[''] after:block  after:opacity-0 after:h-full after:top-0 after:right-0  after:absolute after:bg-blue/40 after:w-0 after:origin-left hover:after:transition-all hover:after:opacity-100 hover:after:w-[20%] hover:after:min-w-4" 
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 leading-10">
            <p className="text-light-gold uppercase">Say Hello</p>
            <a 
            href="mailto: adamgriff86@gmail.com"
            className="text-dark-blue relative transition-all duration-300 ease-in-out bg-transparent after:content-[''] after:block  after:opacity-0 after:h-full after:top-0 after:right-0  after:absolute after:bg-blue/40 after:w-0 after:origin-left hover:after:transition-all hover:after:opacity-100 hover:after:w-[20%] hover:after:min-w-4"
            >
              adamgriff86(at)gmail.com
            </a>
        </div>
      </nav>
  </header>
  )
}