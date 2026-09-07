import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  const message = req.body.message || "No message provided."
  const timestamp = new Date().toISOString()
  const logEntry = `🧠 ${timestamp} - ${message}\n`

  const logPath = path.join(process.cwd(), 'public', 'memories', 'whispersync.log')

  try {
    fs.appendFileSync(logPath, logEntry, 'utf8')
    return res.status(200).json({ success: true, message: 'Bashed it into the log!' })
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message })
  }
}
