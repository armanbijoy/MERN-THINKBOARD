import Note from '../models/Note.js'
export const getAllNotes = async (req,res)=>{
   try{
      const notes = await Note.find()
      res.status(200).json(notes)
   }catch(err){
      console.log('Error', err)
      res.status(500).json({message:'Internernal Server Problem'})
   }
}

export const createNotes = (req,res)=>{
   res.status(201).json({message:"Note Created Successfull"})}


   export const updateNote = 
   (req,res)=>{
   res.status(201).send('Note updated Successfullyt')
}



   export const deleteNote = 
   (req,res)=>{
   res.status(200).send('Note deleted Successfullyt')
}

