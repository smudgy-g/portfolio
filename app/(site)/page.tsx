import { getProfile } from '@/lib/sanity.query'
import { ProfileType } from '@/types'
import Image from 'next/image'
import JobsCard from '../../components/shared/JobsCard'
import LinkButton from '../../components/shared/LinkButton'

export default async function Home() {
  const profile: ProfileType = await getProfile()

  return (
    <>
      <section className="hero-bg pt-32 md:pb-16 md:pt-40 lg:pt-60 flex flex-col items-center justify-center">
          <article className="text-left flex flex-col md:flex-nowrap md:flex-row md:gap-10 w-full items-center justify-between max-w-[1100px]">
            {profile &&
              <div key={profile._id} className="px-4 md:px-28 lg:pl-28">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-light-green font-bold tracking-tight">
                  {/* {profile.headline} */}
                  Software Developer.
                </h1>
                <p className="text-base text-cream leading-relaxed my-3 mr-12">
                  {/* {profile.shortBio} */}
                  {`I'm Adam Griffiths, an enthusiastic software developer specialising in React/Node.js technologies. I love to create beautiful, performant products and user experiences, seeking innotative ways to expand and engage my skills and the world around me.`}

                </p>
                
                <ul className="flex items-center justify-evenly md:justify-start gap-x-6 my-8 md:my-10">
                  {/* {Object.entries(profile.socialLinks)
                    .sort()
                    .map(([key, value], id) => ( */}
                      <li>
                        <LinkButton href='https://github.com/smudgy-g'>
                        {/* {key[0].toUpperCase() + key.toLowerCase().slice(1)}  */}
                          Github
                        </LinkButton>
                      </li>
                      <li>
                        <LinkButton href='https://www.linkedin.com/in/adam-james-griffiths/'>
                        {/* {key[0].toUpperCase() + key.toLowerCase().slice(1)}  */}
                          LinkedIn
                        </LinkButton>
                      </li>
                    {/* ))} */}
                </ul>
              </div>
            }

          <div className="w-full md:w-fit bg-light-gold flex justify-center items-center p-6 md:bg-transparent lg:pr-28">
            <figure className="relative border border-cream min-w-[250px] min-h-[250px]">
              {profile.profileImage &&
                <Image
                  src={profile.profileImage.image}
                  height={200}
                  width={200}
                  alt={profile.profileImage.alt}
                  className="-mt-3 ml-2 md:-mt-10 md:-ml-7"
                />
              }
            </figure>
          </div>
          </article>

      </section>
      
      <section className=''>
        <JobsCard />
      </section>
    </>
  )
}
