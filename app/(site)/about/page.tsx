import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { BiEnvelope } from "react-icons/bi"
import LinkButton from "../../../components/shared/LinkButton"
import db from "@/db"

export default async function About() {
  const skills = db.profile.skills
  const fullBio = db.profile.fullBio

  return (
    <main className="flex flex-col md:flex-nowrap items-center justify-center">
        <>
          <article className="hero-bg flex flex-col items-center justify-items-center text-left pt-40 pb-10 w-full">
            <div className="space-y-5 ">
              <figure className="relative border border-light-blue w-[250px] min-h-[250px]">
                <Image
                  src="/profile_image.png"
                  height={200}
                  width={200}
                  alt="Profile image of Adam Griffiths"
                  className="-mt-3 ml-2 md:-mt-10 md:-ml-7"
                />
              </figure>
              <figcaption>
                <LinkButton href="mailto:adamgriff86@gmail.com" classesWrapper="text-right md:text-left">
                    <BiEnvelope className="text-base inline-flex items-center" /> Say Hello
                </LinkButton>
              </figcaption>
            </div>
          </article>


          <section className="flex flex-col gap-8 md:gap-20 mt-12 mb-12 px-8 md:px-28 lg:px-40 max-w-[1100px]">
            <article className="">
              <div className="relative">
                <h1 className="lg:text-5xl text-4xl relative text-dark-purple lg:leading-tight font-bold mb-8 after:content-[''] after:bg-accent after:h-2 after:absolute after:w-[60%] after:block after:-mt-2 after:left-[4%]  after:z-[-1]">
                  I&apos;m Adam Griffiths.
                </h1>
                <div className="flex flex-col gap-y-3 leading-relaxed text-left">
                  {fullBio && fullBio.map((data, index) => (
                    <p key={`text-${index}`}>{data.text}</p>
                  ))}
                </div>
              </div>
            </article>
            <article className="">
              <h2 className="font-semibold text-dark-purple text-4xl mb-4 relative after:content-[''] after:bg-accent after:h-2 after:absolute after:w-[60%] after:block after:-mt-2 after:left-[4%]  after:z-[-1]">Expertise</h2>
              <p className="text-left max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>
              <ul className="flex flex-wrap gap-3 mt-8 ">
                {skills && skills.map((skill, id) => (
                  <li
                    key={id}
                    className="border border-light-slate hover:border-light-slate px-2 py-1 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </>
    </main>
  )
}