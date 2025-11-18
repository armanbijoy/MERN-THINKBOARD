import express from 'express'
import noteRoutes from './src/routes/notesRoutes.js'
const app = express()

app.use("/api/notes", noteRoutes)









app.listen(5001,()=>{
    console.log('Server Started at 5001')
})