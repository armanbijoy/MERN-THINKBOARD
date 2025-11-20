import express from 'express'
import noteRoutes from './src/routes/notesRoutes.js'
import { connectDB } from './src/config/db.js'
import dotenv from 'dotenv'
import rateLimit from './src/config/uptash.js'
import { rateLimitter } from './src/middleware/rateLimitter.js'
dotenv.config()
const app = express()


//middleware
app.use(express.json()) //this middleware will pare json bodies: req.body
app.use(rateLimitter)

app.use("/api/notes", noteRoutes)


connectDB()
  .then(() => {
    app.listen(5001, () => {
    
      console.log('Server Started at 5001')
    })
  })
  .catch((err) => {
    console.error("DB Connection Failed:", err)
    process.exit(1)
  })
