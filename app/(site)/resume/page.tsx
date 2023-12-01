import Image from "next/image"
import db from "@/db";

export default function ResumePage() {
  const jobs = db.jobs
  const techStack = db.profile.techStack
  const skills = db.profile.skills

  return (
    <main className="flex flex-col lg:flex-row my-8 mt-32 mx-4 text-left md:mx-40">
      <div className="flex lg:flex-col gap-12 lg:mr-12">
        {/* left - skills etc */}
        <section className="text-sm hidden lg:block relative">
          <a href="/">adam.dev</a>
          <p>Berlin, Germany</p>
          <a href="mailto:adamgriff86@gmail.com">
            <span className="after:content-[''] after:bg-accent/50 after:h-2 hover:after:h-1 after:absolute after:w-44 after:block after:-mt-2 hover:after:-mt-1 after:left-[4%] after:z-[-1] transition-all ease-in-out duration-500">adamgriff86(at)gmail.com</span>
          </a>
        </section>
        <section>
          <h1 className="text-base">Tech Stack:</h1>
          <ul className="list-disc flex flex-wrap lg:flex-col">
            {techStack.map((tech, index) => (
              <li key={`skill-${index}`} className="ml-4 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h1 className="text-base">Other:</h1>
          <ul className="list-disc flex flex-wrap lg:flex-col">
            {skills.map((skill, index) => (
              <li key={`skill-${index}`} className="ml-4 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <article className="lg:max-w-[80%] divide-y">
        <header className="relative mt-6 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl">Adam Griffiths</h1>
          <h2 className="text-xl lg:text-3xl">Software Developer</h2>
          <p className="text-sm md:text-base my-4 lg:my-12 md:max-w-[80%]">Enthusiastic JavaScript developer committed to writing high-quality code for security, maintainability, and performance.</p>
        </header>
        <section className="relative">
          <h3 
          className="text-2xl my-8 after:content-[''] after:bg-light-blue after:h-2 after:absolute after:w-44 after:block after:-mt-2 after:left-[4%]  after:z-[-1]"
          >
            Experience
          </h3>
          <ul>
            {jobs.map((data, index) => (
              <li 
                key={`job-${index}`}
                className="mb-8"
              >
                <header className="flex flex-col md:flex-row justify-between md:items-center">
                  <h4 className="font-bold text-lg lg:text-xl inline-block">{data.name}<span className="font-normal"> - {data.jobTitle}</span></h4>
                  <span className="text-sm">{data.startDate} - {data.endDate}</span>
                </header>
                
                <p className="my-4">{data.description}</p>
                <ul className="list-disc ml-3 my-4 text-sm space-y-1">
                  {data.responsibilities.map((data, index) => (
                    <li key={`data-${index}`}>
                      {data}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>

  )
}