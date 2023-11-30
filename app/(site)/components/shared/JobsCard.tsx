import Image from "next/image"
import { getJobs }from '@/lib/sanity.query'

import type { JobType } from '@/types'

export default async function Job() {

  const jobs: JobType[] = await getJobs()

  return (
    <section className="mt-12 flex flex-col items-center bg-white py-10 text-dark-blue px-4 sm:px-6 lg:px-8">
      <div className="mb-16 relative">
        <h2 className="font-semibold relative text-4xl after:content-[''] after:bg-light-green after:h-2 after:w-[60%] after:block after:-mt-2 after:left-[4%] after:absolute after:z-[-1]">Work Experience</h2>
        
      </div>

      <div className="flex flex-col gap-y-12 text-left">
        {jobs.map((data) => (
          <div
            key={data._id} 
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative border border-dark-blue px-3 py-2 after:content-['_'] after:top-1 after:right-1 after:h-[20px] after:min-w-[20px] after:border after:border-dark-blue hover:translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-500"
          >
            <a
              href={data.url}
              rel="noreferrer noopener"
              className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
            >
              <Image
                src={data.logo}
                className="object-cover"
                alt={`${data.name} logo`}
                fill
              />
            </a>
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold">{data.name}</h3>
              <p>{data.jobTitle}</p>
              <small className="text-sm mt-2 tracking-widest uppercase">
                {data.startDate.toString()} - {data.endDate.toString()}
              </small>
              <p className="text-base my-4">{data.description}</p>

              {data.url &&
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path></svg>
                <a href={data.url} target="_blank" >{data.name}</a>
              </div>
              }
            </div>

          </div>
          ))}
      </div>
    </section>
  )
}