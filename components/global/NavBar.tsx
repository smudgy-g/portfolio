"use client"

import Link from "next/link"
import Image from 'next/image'
import { useRef, useState } from 'react'
import moon from '@/images/moon.png'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SocialActionsBar from "../SocialActionsBar"


const routes = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About Me'},
  {href: '#projects', label: 'Projects'},
  {href: '#tech', label: 'Tech Stack'},
  {href: '#contact', label: 'Contact'},
]


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const navButtonRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="fixed top-0 w-screen z-50 py-2 px-2 bg-base-100 bg-transparent lg:px-12 flex justify-between items-center md:items-start">
        <a href="https://github.com/smudgy-g" target="_blank" className="">
          <Image src={moon} height={100} width={100} alt="logo for Adam Grifftihs" className="w-16 md:w-24"/>
        </a>
        
        <ul className="hidden text-base md:flex items-center uppercase italic gap-6 mr-10 ">
          {routes.map((link, i) => (
            <li 
              key={`link-${i}`}
              className="relative bg-none flex gap-2 items-center"
            >
              <Link
                href={link.href}
                className="nav-link" 
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

      <label className="btn btn-circle swap swap-rotate md:hidden z-[100]" aria-label={isOpen ? "close menu" : "open menu"} >
        <input ref={navButtonRef} checked={isOpen} type="checkbox" onClick={handleClick} />
        {/* hamburger icon */}
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        {/* close icon */}
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
      </label>

      <nav className={`${isOpen ? "visible" : "hidden"} md:hidden fixed top-0 left-0 bottom-0 bg-base-100 right-0 text-4xl flex flex-col justify-around items-end z-[99] p-14 duration-500 ease-in-out`}>
        <ul className="text-right">
          {routes.map((link, i) => (
            <li 
            key={`link-${i}`}>
              <Link
                href={link.href}
                className="nav-link"
                onClick={handleClick}
              >
                {link.label}
              </Link>
          </li>
          ))}
        </ul>
        <SocialActionsBar />
      </nav>
    </header>

    <aside className="hidden absolute md:visible bottom-3 left-2 z-50">
      <SocialActionsBar />
    </aside>
  </>
  )
}
