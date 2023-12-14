import Image from 'next/image'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import spaceman from '@/images/spaceman.png'

import db from "@/db"
import ContactForm from '@/components/ContactForm'
import ProjectCarousel from '@/components/ProjectCarousel'


export default function Page () {
  const tech = db.profile.techStack
  const skills = db.profile.skills
  const about = db.profile.about

  return (
    <>
      <section 
        id="home"
        className="flex flex-col items-center justify-center bg-[url('/assets/sprinkle.svg')] bg-fixed bg-repeat"
      >
        <article className="text-left flex flex-col md:flex-nowrap md:flex-row md:gap-10 w-full items-center justify-between max-w-4xl">
          <div className="px-4 md:px-12">
            <h1 className="">Adam Griffiths</h1>
            <p className="mt-4 font-bold italic text-accent md:text-2xl lg:text-3xl">Enthusiastic</p> 
            <h2>Software Developer</h2>
          </div>

          <div className="w-full md:w-fit flex justify-center items-center p-6 md:bg-transparent lg:pr-28">
            <figure className="relative min-w-[250px] min-h-[250px] ">
              <Image
                src={spaceman}
                height={200}
                width={200}
                alt="Profile image of Adam Griffiths"
                className="translate-x-7 md:-mt-10 md:-ml-5 rotate-45 md:rotate-0"
              />
            </figure>
          </div>
        </article>
        <a href="#about" role="button" className="btn btn-circle btn-outline btn-primary bg-base-100 absolute bottom-5">
          <ChevronDoubleDownIcon className="w-10 h-10"/>
        </a>
      </section>

      <section 
        id="about"
        className="flex flex-col md:justify-between items-center py-24 px-2 md:p-0"
      >
        <div className="prose self-center my-auto max-w-sm lg:max-w-3xl lg:columns-2 text-justify gap-5 tracking-wide lg:space-x-10">
          <p>Hey there! I&apos;m <span className="font-bold text-xl italic text-accent">Adam</span>, a JavaScript developer fueled by enthusiasm and positivity. Believe it or not, I used to rock the world of hospitality management before following my true passion and diving headfirst into the realm of web development.</p>
          <p>With a background in hospitality, I bring many skills to my coding ventures. I may have traded cocktails and kitchens for algorithms and functions, but I&apos;ve learned valuable lessons along the way. Now, armed with the power of JavaScript, React, and Node.js, I&apos;m on a mission to create captivating digital experiences.</p>
          <p>I approach my work with positivity and an unwavering love for the craft. Every line of code I write is infused with excitement.</p>
        </div>
        <h3 className="self-end order-first md:order-2">About Me</h3>
      </section>

      <section 
        id="projects"
        className="flex flex-col md:justify-between items-evenly py-24 md:p-0"
      >
        <ProjectCarousel />
        <h3 className="self-end order-first md:order-2">Projects</h3>
       
      </section>

      <section 
        id="tech"
        className="flex flex-col gap-7 md:gap-4 md:justify-between items-center py-24 px-2 md:p-0"
      >

        <div className="my-auto space-y-8">
          <div className="flex gap-12 flex-col md:flex-row md:gap-6">
            <div className="flex flex-col gap-6 max-w-md">
              <h4 className="self-end md:self-center">Frontend</h4>
              <ul className="space-y-3 columns-2">
                {tech && tech.frontend.map((tech, i) => (
                  <li key={`frontend${i}`}
                    className="border border-neutral px-2 py-1 rounded-md lg:text-lg lg:px-3 lg:py-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" flex flex-col gap-6 max-w-md">
              <h4 className="self-end md:self-center">Backend</h4>
              <ul className="space-y-3 columns-2">
                {tech && tech.backend.map((tech, i) => (
                  <li key={`backend${i}`}
                    className="border border-neutral px-2 py-1 rounded-md lg:text-lg lg:px-3 lg:py-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 hidden md:flex flex-col gap-6 max-w-md mx-auto">
            <h4 className="self-end md:self-center">Soft Skills</h4>
            <ul className="space-y-3 columns-2">
              {skills && skills.map((skill, i) => (
                <li key={`skill${i}`}
                  className="border border-neutral px-2 py-1 rounded-md lg:text-lg lg:px-3 lg:py-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="self-end order-first md:order-2">Tech Stack</h3>
      </section>

      <section 
        id="contact"
        className="flex flex-col md:justify-between py-24 md:p-0"
      >
        <div className="order-2 md:order-first my-auto self-center">
          
          <ContactForm />
        </div>
        <h3 className="order-first md:order-2 self-end">Contact</h3>
      </section>
    </>
  )
}