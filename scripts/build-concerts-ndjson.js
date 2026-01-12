/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..')
const inputPath = path.join(projectRoot, 'src', 'information', 'concertSchedule.json')
const outputDir = path.join(projectRoot, 'sanity', 'seed')
const outputPath = path.join(outputDir, 'concerts.ndjson')

const allowedYears = new Set(['2023', '2022', '2021', '2020', '2019', '2018'])

const monthToNum = (monthStr) => {
  if (!monthStr) return undefined
  const m = monthStr.trim().toLowerCase()
  const map = {
    january: '01',
    february: '02',
    march: '03',
    april: '04',
    may: '05',
    june: '06',
    july: '07',
    august: '08',
    september: '09',
    october: '10',
    november: '11',
    december: '12',
  }
  if (map[m]) return map[m]
  // Handle variants like 'July/August', 'TBC'
  if (m.includes('july')) return '07'
  if (m.includes('august')) return '08'
  return undefined
}

const parseDay = (dayStr) => {
  if (!dayStr) return undefined
  const digits = String(dayStr).trim().toLowerCase().replace(/(st|nd|rd|th)$/i, '')
  const n = parseInt(digits, 10)
  if (Number.isNaN(n) || n <= 0 || n > 31) return undefined
  return String(n).padStart(2, '0')
}

const buildEventDate = (date, dateMonth, year) => {
  const y = year && String(year).trim()
  const m = monthToNum(dateMonth)
  const d = parseDay(date)
  if (y && m && d) return `${y}-${m}-${d}`
  // If only year+month present, default to first of month for ordering purposes
  if (y && m) return `${y}-${m}-01`
  // If only year present, default to Jan 1
  if (y) return `${y}-01-01`
  return undefined
}

function main() {
  const raw = fs.readFileSync(inputPath, 'utf-8')
  const json = JSON.parse(raw)
  const concerts = Array.isArray(json.concerts) ? json.concerts : []
  const filtered = concerts.filter((c) => allowedYears.has(String(c.year)))

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true})
  }

  const lines = filtered.map((c) => {
    const doc = {
      _type: 'concert',
      legacyId: c.id || undefined,
      eventDate: buildEventDate(c.date, c.dateMonth, c.year),
      date: c.date || undefined,
      dateMonth: c.dateMonth || undefined,
      year: c.year || undefined,
      city: c.city || undefined,
      venue: c.venue || undefined,
      repertoire: c.repertoire || undefined,
      start_time: c.start_time || undefined,
      ticket_link: c.ticket_link || undefined,
    }
    // Remove undefined fields
    Object.keys(doc).forEach((k) => doc[k] === undefined && delete doc[k])
    return JSON.stringify(doc)
  })

  fs.writeFileSync(outputPath, lines.join('\n') + '\n', 'utf-8')
  console.log(`Wrote ${lines.length} documents to ${outputPath}`)
}

main()


