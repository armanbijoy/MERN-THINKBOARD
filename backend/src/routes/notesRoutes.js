import express from 'express'
import { createNotes, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js'

// Create a new router object to define routes for notes
const router = express.Router()


// GET request to /api/notes
router.get('/', getAllNotes)


// GET request to /api/notes/:id
router.get('/:id', getNoteById)


// POST request to /api/notes
router.post('/', createNotes)

// PUT request to /api/notes/:id
router.put('/:id', updateNote)


// DELETE request to /api/notes/:id
router.delete('/:id', deleteNote)


export default router
