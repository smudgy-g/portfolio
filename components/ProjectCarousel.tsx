"use client"

import Image from 'next/image'
import { useState } from 'react'
import {ChevronDoubleDownIcon, ArrowTopRightOnSquareIcon, ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import db from '@/db'

interface Project {
  description: string
  name: string
  projectUrl: string
  tagline: string
}

export default function ProjectCarousel () {
  const projects = db.projects
  const [currentProject, setCurrentProject] = useState<Project>(projects[0])

  return (
    <div className="mx-2 mt-8 md:mx-auto md:my-auto flex flex-col gap gap-2 lg:flex-row md:gap-20 items-center ">
      
      <div className="carousel carousel-center max-w-full md:max-w-lg p-4 space-x-4 rounded-box md:text-left">
        {projects && projects.map((project, i) => (
        <div className="carousel-item rounded-box bg-neutral" key={`project${i}`}>
          <div className="card card-compact w-56 md:w-96 bg-base-100 border shadow-xl">
            <figure>
              <Image src={`/assets/${project.name}.png`} height={250} width={250} alt=`` className="object-none h-20 w-full md:h-40 lg:h-56"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center capitalize">{project.name}</h2>
              <p>{project.tagline}</p>
              <div className="card-actions justify-center md:justify-end md:mt-4">
                <button className="hidden lg:flex btn btn-accent btn-circle btn-outline" onClick={() => setCurrentProject(project)}>
                  <ArrowSmallRightIcon className="w-8 h-8" />
                </button>
                <button className="lg:hidden btn btn-accent btn-circle btn-outline" onClick={() => setCurrentProject(project)}>
                  <ChevronDoubleDownIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>

      <div className="prose px-3 md:max-w-md lg:max-w-xs text-justify lg:text-left ">
          <h2 className="text-3xl md:text-5xl mb-3 capitalize">
            {currentProject.name}
            <span>
              <a href={currentProject.projectUrl} target="_blank" className="ml-7 badge badge-secondary">
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </span>
          </h2>
        <p className="leading-5 md:leading-relaxed tracking-wide text-sm">{currentProject.description}</p>
        <div className="flex justify-end md:block">
        </div>
      </div>
    </div>
  )
}