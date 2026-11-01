const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Connect to MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// Test the backend
app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'Uncomplicated backend is running!',
  })
})

// Test the database connection
app.get('/api/db-test', async (req, res) => {
  try {
    const [result] = await db.query('SELECT DATABASE() AS databaseName')

    res.json({
      status: 'success',
      message: 'MySQL connected successfully!',
      database: result[0].databaseName,
    })
  } catch (error) {
    console.error('Database connection failed:', error.message)
    res.status(500).json({
      status: 'error',
      message: 'Could not connect to the database.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})


// express() creates our backend application
// cors() allows requests from our React development server.
// express.json() allows Express to read JSON data sent by the frontend.
// /api/health is a test endpoint that tells us whether the server is running.
// app.listen() starts the server on port 5000.