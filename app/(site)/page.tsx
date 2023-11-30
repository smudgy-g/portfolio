import { getProfile } from '@/lib/sanity.query'
import { ProfileType } from '@/types'
import Image from 'next/image'
import JobsCard from './components/shared/JobsCard'
import LinkButton from './components/shared/LinkButton'

export default async function Home() {
  const profile: ProfileType = await getProfile()

  return (
    <>
      <section className="bg-blue-gold-gradient pb-16 pt-60 flex flex-col items-center justify-center">
          <article className="text-left flex flex-nowrap gap-10 w-full items-center justify-between px-28 max-w-[1100px]">
            {profile &&
              <div key={profile._id} className="">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-light-green font-bold tracking-tight">
                  {profile.headline}
                </h1>
                <p className="text-base text-cream leading-relaxed my-3 mr-12">
                  {profile.shortBio}
                </p>
                
                <ul className="flex items-center gap-x-6 my-10">
                  {Object.entries(profile.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <LinkButton content={key[0].toUpperCase() + key.toLowerCase().slice(1)} href={value} />
                      </li>
                    ))}
                </ul>
              </div>
            }
          <figure className="relative border border-cream min-w-[200px] min-h-[250px]">
            {profile.profileImage &&
              <Image 
                src={profile.profileImage.image} 
                height={200} 
                width={200} 
                alt={profile.profileImage.alt} 
                className="-mt-10 -ml-7 block"
              />
            }
          </figure>
          </article>

      </section>
      
      <section className=''>
        <JobsCard />
      </section>
    </>
  )
}
