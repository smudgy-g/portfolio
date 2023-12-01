import Link from "next/link"
import db from "@/db"

export default async function Project() {
  const projects = db.projects

  return (
    <main className="pt-32 lg:pt-48 px-8 md:px-12 ">
      <header className="mb-12 relative ">
        <h1 className="mx-auto text-5xl font-bold after:content-[''] after:bg-light-blue after:h-2 after:absolute after:w-44 after:block after:-mt-2 after:left-[40%]  after:z-[-1]">Projects</h1>
      </header>
      <section className="mx-auto max-w-5xl py-12">
        <ul className="flex flex-wrap gap-4 justify-center">
          {projects.map((project, index) => (
            <li 
              key={`project-${index}`}
              className="relative mb-6 bg-cream border border-accent shadow-md hover:translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-500 basis-[calc((100% - 1em) / 2)] max-w-md"
            >
              <div className="p-8">
                <h2 className="text-2xl font-semibold">{project.name}</h2>
              </div>
              <div className="p-3 text-left">
                <p className="text-sm mb-4 ">{project.tagline}</p>
                <p className="text-xs">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
    // <main className="flex flex-col md:flex-nowrap items-center justify-center mt-24">
    //   <section className="max-w-2xl mb-16">
    //     <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
    //       Featured projects I&apos;ve built over the years
    //     </h1>
    //     <p className="text-base text-zinc-400 leading-relaxed">
    //       I&apos;ve worked on tons of little projects over the years but these
    //       are the ones that I&apos;m most proud of. Many of them are
    //       open-source, so if you see something that piques your interest, check
    //       out the code and contribute if you have ideas for how it can be
    //       improved.
    //     </p>
    //   </section>

    //   <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
    //     {projects.map((project) => (
    //       <Link
    //         href={`/projects/${project.slug.current}`}
    //         key={project._id}
    //         className="flex items-center gap-x-4 border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
    //       >
    //         <div>
    //           <h2 className="font-semibold mb-1">{project.name}</h2>
    //           <div className="text-sm text-zinc-400">{project.tagline}</div>
    //         </div>
    //       </Link>
    //     ))}
    //   </section>
    // </main>
  )
}