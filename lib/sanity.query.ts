import { profileQuery, jobQuery, projectsQuery, singleProjectQuery } from '@/lib/sanity.queries'
import client from './sanity.client'
import { ProfileType, JobType } from '@/types'

export async function getProfile() {
  return client.fetch<ProfileType>(
    profileQuery,
    { perspective: "published" }
  )
}

export async function getJobs() {
  return client.fetch<JobType[]>(
    jobQuery,
    { perspective: "published" }
  )
}

export async function getProjects() {
  return client.fetch(
    projectsQuery,
    { perspective: "published" }
  )
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    singleProjectQuery,
    { slug, perspective: "published" }
  )
}