import Image from "next/image"
import db from "@/db";

export default function ResumePage() {
  const jobs = db.jobs
  const techStack = db.profile.techStack
  const skills = db.profile.skills

  return (
    <main className="flex my-8 mt-32 mx-12 text-left lg:mx-24">
      <div className="flex flex-col gap-12 mr-12">
        {/* left - skills etc */}
        <section className="text-sm ">
          <a href="/">adam.dev</a>
          <p>Berlin, Germany</p>
          <a href="mailto:adamgriff86@gmail.com">adamgriff86(at)gmail.com</a>
        </section>
        <section>
          <h1 className="text-base">Tech Stack:</h1>
          <ul className="list-disc">
            {techStack.map((tech, index) => (
              <li key={`skill-${index}`} className="ml-4 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h1 className="text-base">Other:</h1>
          <ul className="list-disc">
            {skills.map((skill, index) => (
              <li key={`skill-${index}`} className="ml-4 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <article className="max-w-[80%] divide-y">
        <header className="relative">
          <h1 className="text-6xl">Adam Griffiths</h1>
          <h2 className="text-3xl">Software Developer</h2>
          <p className="my-12 max-w-[80%]">Enthusiastic JavaScript developer committed to writing high-quality code for security, maintainability, and performance.</p>
        </header>
        <section>
          <h3 className="text-2xl my-8">Experience</h3>
          <ul>
            {jobs.map((data, index) => (
              <li key={`job-${index}`}>
                <header>
                  <h4>{data.name}<span> - {data.jobTitle}</span></h4>
                  <span>{data.startDate} - {data.endDate}</span>
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