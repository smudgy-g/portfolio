import { groq } from "next-sanity";

export const profileQuery = groq`
  *[_type == "profile"]{
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