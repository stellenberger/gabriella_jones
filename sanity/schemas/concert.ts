import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'concert',
  title: 'Concert',
  type: 'document',
  fields: [
    defineField({
      name: 'legacyId',
      title: 'Legacy ID',
      type: 'string',
      description:
        'Optional: Original ID from JSON data. Sanity uses its own _id, this is just for reference.',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      options: {dateFormat: 'YYYY-MM-DD'},
      description:
        'Normalized date for sorting and filtering (YYYY-MM-DD). Use this for ordering.',
    }),
    defineField({
      name: 'date',
      title: 'Date (Display)',
      type: 'string',
      description: 'Display-only day text from JSON (e.g. "10th").',
    }),
    defineField({
      name: 'dateMonth',
      title: 'Month (Display)',
      type: 'string',
      description: 'Display-only month text from JSON (e.g. "March").',
    }),
    defineField({
      name: 'year',
      title: 'Year (Display)',
      type: 'string',
      description: 'Display-only year text from JSON (e.g. "2024").',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'repertoire',
      title: 'Repertoire',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'start_time',
      title: 'Start Time',
      type: 'string',
    }),
    defineField({
      name: 'ticket_link',
      title: 'Ticket Link',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: 'Event Date, New → Old',
      name: 'eventDateDesc',
      by: [{field: 'eventDate', direction: 'desc'}],
    },
    {
      title: 'Event Date, Old → New',
      name: 'eventDateAsc',
      by: [{field: 'eventDate', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      city: 'city',
      venue: 'venue',
      date: 'eventDate',
      monthDisplay: 'dateMonth',
      dateDisplay: 'date',
      yearDisplay: 'year',
    },
    prepare(selection) {
      const {city, venue, date, monthDisplay, dateDisplay, yearDisplay} = selection as {
        city?: string
        venue?: string
        date?: string
        monthDisplay?: string
        dateDisplay?: string
        yearDisplay?: string
      }
      const title = [city, venue].filter(Boolean).join(' • ')
      const subtitle =
        date || [dateDisplay, monthDisplay, yearDisplay].filter(Boolean).join(' ')
      return {
        title: title || 'Concert',
        subtitle,
      }
    },
  },
})


