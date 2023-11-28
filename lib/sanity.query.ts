import { profileQuery } from '@/lib/sanity.queries'
import client from './sanity.client'

export async function getProfile() {
  return client.fetch(
    profileQuery,
    { perspective: "published" }
  )
}