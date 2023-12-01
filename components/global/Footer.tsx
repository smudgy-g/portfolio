import { Route } from "@/types";
import Link from "next/link";

export default function Footer({ routes }: { routes: Route[] }) {
  return (
    <footer className="bg-deep-blue text-cream flex flex-col justify-center">
      <div className="w-full px-12 pt-20 pb-12 md:pt-32 md:pb-20 lg:px-40">
        <div className="flex flex-col gap-8 md:flex-row md:items-end mb-16">
        
          <div className="text-left mr-[30%]">
            <p className="text-accent uppercase mb-3">Say Hello</p>
            <a
            href="mailto: adamgriff86@gmail.com"
            className="relative transition-all duration-300 ease-in-out bg-transparent after:content-[''] after:block  after:opacity-0 after:h-full after:top-0 after:right-0  after:absolute after:bg-light-blue/40 after:w-0 after:origin-left hover:after:transition-all hover:after:opacity-100 hover:after:w-[20%] hover:after:min-w-4"
            >
              adamgriff86(at)gmail.com
            </a>
          </div>
          <div>
            <ul className="text-left">
              {routes.map((route, index) => (
                <li
                  className="relative"
                  key={`nav-item-${index}`}>
                  <Link
                    href={route.href}
                    prefetch
                    className="leading-10 relative transition-all duration-300 ease-in-out bg-transparent after:content-[''] after:block  after:opacity-0 after:h-full after:top-0 after:right-0  after:absolute after:bg-light-blue/40 after:w-0 after:origin-left hover:after:transition-all hover:after:opacity-100 hover:after:w-[20%] hover:after:min-w-4"
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-light-blue pt-6 flex justify-end text-right" >
          <small className="hover:text-white duration-200">
            <p className="text-accent">Adam Griffiths</p>
            <span>All rights reserved &copy; {new Date().getFullYear()}</span>
          </small>
        </div>
      </div>
    </footer>
  )
}