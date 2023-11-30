import { getProfile } from '@/lib/sanity.query'
import { ProfileType } from '@/types'
import Image from 'next/image'
import JobsCard from './components/shared/JobsCard'
import LinkButton from './components/shared/LinkButton'

export default async function Home() {
  const profile: ProfileType = await getProfile()

  return (
    <>
      <section className="relative flex lg:flex-row flex-col-reverse items-center lg:justify-center justify-between 
      bg-gradient-to-r from-bg-blue from-10% to-light-gold-500 to-33% ">
        {profile &&
          <div key={profile._id} className="xl:pt-32 pt-20 pb-16 lg:px-16 px-6 md:max-w-1xl max-w-2xl">
            <h1 className="text-7xl text-light-green font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              {profile.headline}
            </h1>
            <p className="text-base leading-relaxed">
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

        {profile.profileImage &&
          <div className="bg-light-gold">
            <Image src={profile.profileImage.image} height={500} width={300} alt={profile.profileImage.alt}/>
          </div>}

      </section>
      <section className=''>
        <JobsCard />
      </section>
    </>
  )
}
