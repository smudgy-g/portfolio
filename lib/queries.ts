import db from '@/db'

export function getProfile () {
  return db.profile
}

export function getJobs () {
  return db.jobs
}

export function getProjects () {
  return db.projects
}