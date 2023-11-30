import { groq } from "next-sanity"

export const profileQuery = groq`
  *[_type == "profile"][0]{
    _id,
    fullName,
    headline,
    profileImage {alt, "image": asset->url},
    shortBio,
    location,
    fullBio,
    email,
    "resumeURL": resumeURL.asset->url,
    socialLinks,
    skills
  }
`

export const jobQuery = groq`
  *[_type == "job"]{
    ...,
    "logo": logo.asset->url,
  }
`

export const projectsQuery = groq`
  *[_type == "project"]{
    _id, 
    name,
    "slug": slug.current,
    tagline,
    "logo": logo.asset->url,
  }
`

export const singleProjectQuery = groq`
  *[_type == "project" && slug.current ==$slug][0]{
    _id,
    name,
    projectUrl,
    coverImage {
      alt, 
      "image": asset->url
    },
    tagline,
    description
  }
`