/**
 * Migration Script: CSV to Supabase
 *
 * This script migrates historical tracking data from CSV files to Supabase.
 * Run with: node scripts/migrate-csv-to-supabase.js
 *
 * Prerequisites:
 * 1. Create tables in Supabase first (run the SQL from setup-tables route)
 * 2. Set environment variables or update the credentials below
 */

const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')

// Supabase credentials - loaded from environment variables
// Set these in .env.local or pass them when running the script:
//   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co SUPABASE_SERVICE_KEY=sb_secret_xxx node scripts/migrate-csv-to-supabase.js
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing required environment variables: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_KEY')
  console.error('Set them in .env.local or pass them as environment variables')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)

// Batch size for inserts (Supabase recommends <= 1000)
const BATCH_SIZE = 100

/**
 * Parse a CSV file into an array of objects
 */
function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n').filter(line => line.trim())

  if (lines.length === 0) return []

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/\s+/g, '_'))
  const rows = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i])
    if (values.length === headers.length) {
      const row = {}
      headers.forEach((header, index) => {
        row[header] = values[index] || null
      })
      rows.push(row)
    }
  }

  return rows
}

/**
 * Parse a single CSV line, handling quoted fields
 */
function parseCSVLine(line) {
  const values = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  values.push(current.trim())

  return values
}

/**
 * Insert records in batches
 */
async function batchInsert(tableName, records, mapFn) {
  console.log(`\nMigrating ${records.length} records to ${tableName}...`)

  let successCount = 0
  let errorCount = 0

  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE)
    const mappedBatch = batch.map(mapFn).filter(r => r !== null)

    if (mappedBatch.length === 0) continue

    const { data, error } = await supabase
      .from(tableName)
      .insert(mappedBatch)

    if (error) {
      console.error(`  Error at batch ${Math.floor(i / BATCH_SIZE) + 1}:`, error.message)
      errorCount += batch.length
    } else {
      successCount += mappedBatch.length
      process.stdout.write(`  Progress: ${successCount}/${records.length}\r`)
    }
  }

  console.log(`\n  Completed: ${successCount} inserted, ${errorCount} errors`)
  return { successCount, errorCount }
}

/**
 * Migrate page_view.csv
 */
async function migratePageViews() {
  const filePath = path.join(__dirname, '..', 'CONVERSION TRACKER - page_view.csv')

  if (!fs.existsSync(filePath)) {
    console.log('page_view.csv not found, skipping...')
    return
  }

  const records = parseCSV(filePath)

  await batchInsert('page_views', records, (row) => ({
    date: row.date || new Date().toISOString(),
    session_id: row.session_id || null,
    event_id: row.event_id || null,
    page: row.page || null,
    referrer: row.referrer || null,
    country: row.country || null,
    utm_source: row.utm_source || null,
    utm_medium: row.utm_medium || null,
    utm_campaign: row.utm_campaign || null,
    utm_content: row.utm_content || null,
  }))
}

/**
 * Migrate initiate_checkout.csv
 */
async function migrateInitiateCheckouts() {
  const filePath = path.join(__dirname, '..', 'CONVERSION TRACKER - initiate_checkout.csv')

  if (!fs.existsSync(filePath)) {
    console.log('initiate_checkout.csv not found, skipping...')
    return
  }

  const records = parseCSV(filePath)

  await batchInsert('initiate_checkouts', records, (row) => ({
    date: row.date || new Date().toISOString(),
    session_id: row.session_id || null,
    event_id: row.event_id || null,
    first_name: row['first_name'] || row.first_name || null,
    last_name: row['last_name'] || row.last_name || null,
    email: row.email || null,
    amount: row.amount ? parseFloat(row.amount) : null,
    product: row.product || null,
    funnel: row.funnel || null,
    source: row.source || null,
    country: row.country || null,
    referrer: row.referrer || null,
    utm_source: row.utm_source || null,
    utm_medium: row.utm_medium || null,
    utm_content: row.utm_content || null,
  }))
}

/**
 * Migrate purchase.csv
 */
async function migratePurchases() {
  const filePath = path.join(__dirname, '..', 'CONVERSION TRACKER - purchase.csv')

  if (!fs.existsSync(filePath)) {
    console.log('purchase.csv not found, skipping...')
    return
  }

  const records = parseCSV(filePath)

  await batchInsert('purchases', records, (row) => ({
    date: row.date || new Date().toISOString(),
    session_id: row.session_id || null,
    event_id: row.event_id || null,
    name: row.name || null,
    email: row.email || null,
    amount: row.amount ? parseFloat(row.amount) : null,
    product: row.product || null,
    country: row.country || null,
    referrer: row.referrer || null,
    utm_source: row.utm_source || null,
    utm_medium: row.utm_medium || null,
    utm_content: row.utm_content || null,
  }))
}

/**
 * Main migration function
 */
async function main() {
  console.log('='.repeat(50))
  console.log('CSV to Supabase Migration')
  console.log('='.repeat(50))

  try {
    // Test connection
    const { data, error } = await supabase.from('page_views').select('count').limit(1)
    if (error && error.code === '42P01') {
      console.error('\nError: Tables do not exist yet!')
      console.error('Please create the tables first by running the SQL in Supabase dashboard.')
      console.error('You can get the SQL by visiting: http://localhost:3000/api/supabase/setup-tables')
      process.exit(1)
    }

    console.log('Connected to Supabase successfully\n')

    // Run migrations
    await migratePageViews()
    await migrateInitiateCheckouts()
    await migratePurchases()

    console.log('\n' + '='.repeat(50))
    console.log('Migration complete!')
    console.log('='.repeat(50))

  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

main()
