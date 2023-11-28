"use client"

import { Transition, Popover } from "@headlessui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from 'react'
import ThemeButton from "./ThemeButton"

export default function NavBar() {
  let pathname = usePathname() || "/"

  return (
    <Popover as ="nav" className="relative">
      {({open}) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <h1 className="text-2xl font-medium">
                      Adam <span className="text-purple-700">Griffiths</span>
                    </h1>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link 
                    href="/" 
                    prefetch 
                    className={`${pathname === "/" 
                    ? 'border-purple-700 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' 
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/blog" 
                    prefetch 
                    className={`${pathname === "/blog" 
                    ? 'border-purple-700 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' 
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/projects" 
                    prefetch 
                    className={`${pathname === "/projects" 
                    ? 'border-purple-700 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' 
                    : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}`}
                  >
                    Projects
                  </Link>
                  <ThemeButton />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeButton classWrapper="mr-3"/>
                <Popover.Button className="z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus: ring-purple-700 dark:hover:bg-gray-800">
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>
          
          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
            <Popover.Panel className="fixed z-10 top-0 right-0 left-0 bottom-0 sm:hidden">
              <div className="bg-white dark:bg-[#090908] pt-32 pb-3 h-full w-full">
                <Link 
                  href="/" 
                  prefetch 
                  className={pathname === '/' 
                  ? 'bg-purple-50 border-purple-700 text-purple-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}
                >
                  Home
                </Link>
                <Link 
                  href="/blog" 
                  prefetch 
                  className={pathname === '/blog' 
                  ? 'bg-purple-50 border-purple-700 text-purple-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}
                >
                  Blog
                </Link>
                <Link 
                  href="/projects" 
                  prefetch 
                  className={pathname === '/projects' 
                  ? 'bg-purple-50 border-purple-700 text-purple-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800' 
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white'}
                >
                  Projects
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}