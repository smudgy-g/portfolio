import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: 'wsyneuo5',
  dataset: 'production',
  apiVersion: '2023-11-28',
  useCdn: false,
}

const client = createClient(config)

export default client