import express from 'express'
import { createNotes, deleteNote, getAllNotes, updateNote } from '../controllers/notesController.js'

const router = express.Router()

router.get('/', getAllNotes)

router.post('/', createNotes)



router.get('/:id', updateNote )

router.delete('/:id',deleteNote )






// app.get("/api/notes",(req,res)=>{
//   res.status(200).send('you got 10 notes')
// })

// app.post('api/notes',(req,res)=>{
//     res.status(201).json({message:"Post Created Successfull"})
// })

// app.put('api/notes/:id',(req,res)=>{
//     res.status(200).json({message:"Note Updated Successfull"})
// })

// app.delete("api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"Note Deleted Successfull"})
// })

export default router