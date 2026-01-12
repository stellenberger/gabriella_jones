import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'hqwwj6t4',
  dataset: 'production',
  apiVersion: '2026-01-12',
  useCdn: true
})

export const fetchConcerts = async () => {
  const query = `*[_type == "concert"] | order(eventDate desc){
    "id": coalesce(legacyId, _id),
    _id,
    eventDate,
    date,
    dateMonth,
    year,
    city,
    venue,
    repertoire,
    start_time,
    ticket_link
  }`
  return sanityClient.fetch(query)
}


