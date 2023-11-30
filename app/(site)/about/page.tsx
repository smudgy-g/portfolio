import Image from "next/image"
import { getProfile } from "@/lib/sanity.query"
import type { ProfileType } from "@/types"
import { PortableText } from "@portabletext/react"
import { BiEnvelope, BiFile } from "react-icons/bi"
import LinkButton from "../components/shared/LinkButton"

export default async function About() {
  const profile: ProfileType = await getProfile()

  return (
    <main className="flex flex-col md:flex-nowrap items-center justify-center">
      {profile &&
        <>
          <article className="hero-bg flex flex-col items-center justify-items-center text-left pt-40 pb-10 w-full">
            <div className="space-y-5 ">
              <figure className="relative border border-cream w-[250px] min-h-[250px]">
                <Image
                  src={profile.profileImage.image}
                  height={200}
                  width={200}
                  alt={profile.profileImage.alt}
                  className="-mt-3 ml-2 md:-mt-10 md:-ml-7"
                />
              </figure>
              <figcaption>
                <LinkButton href={`${profile.resumeURL}?dl=${profile.fullName}_resume`} classesWrapper="text-right md:text-left">
                    <BiFile className="text-base inline-flex items-center" /> Download Resumé
                </LinkButton>
              </figcaption>
            </div>
          </article>


          <section className="flex flex-col gap-8 md:gap-20 mt-12 mb-12 px-8 md:px-28 lg:px-40 max-w-[1100px]">
            <article className="">
              <div className="relative">
                <h1 className="lg:text-5xl text-4xl relative text-dark-blue lg:leading-tight font-bold mb-8 after:content-[''] after:bg-light-green after:h-2 after:absolute after:w-[60%] after:block after:-mt-2 after:left-[4%]  after:z-[-1]">
                  I&apos;m {profile.fullName}.
                </h1>
                <div className="flex flex-col gap-y-3 leading-relaxed text-left">
                  <PortableText value={profile.fullBio} />
                </div>
              </div>
            </article>
            <article className="">
              <h2 className="font-semibold text-dark-blue text-4xl mb-4 relative after:content-[''] after:bg-light-green after:h-2 after:absolute after:w-[60%] after:block after:-mt-2 after:left-[4%]  after:z-[-1]">Expertise</h2>
              <p className="text-left max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>
              <ul className="flex flex-wrap gap-3 mt-8 ">
                {profile.skills && profile.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="border border-light-gold hover:border-blue px-2 py-1 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </>
      }
    </main>
  )
}