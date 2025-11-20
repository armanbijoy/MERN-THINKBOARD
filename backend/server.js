import express from 'express'
import noteRoutes from './src/routes/notesRoutes.js'
import { connectDB } from './src/config/db.js'
import dotenv from 'dotenv'
import rateLimit from './src/config/uptash.js'
import { rateLimitter } from './src/middleware/rateLimitter.js'

dotenv.config()
const app = express()

// Parse incoming request bodies that are in JSON format 
// and store the result in req.body
app.use(express.json())

// Apply rate limiting middleware to protect the API from excessive requests
app.use(rateLimitter)

// Mount all note-related routes under /api/notes
app.use("/api/notes", noteRoutes)

// Establish a connection to the database before starting the server
connectDB()
  .then(() => {
    // Start the server only after a successful database connection
    app.listen(5001, () => {
      console.log('Server Started at 5001')
    })
  })
  .catch((err) => {
    // Log the database connection error and stop the application
    console.error("DB Connection Failed:", err)
    process.exit(1)
  })
