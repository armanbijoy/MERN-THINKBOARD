import express from 'express'
import noteRoutes from './src/routes/notesRoutes.js'
import { connectDB } from './src/config/db.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

connectDB()

app.use("/api/notes", noteRoutes)









app.listen(5001,()=>{
    console.log('Server Started at 5001')
})


