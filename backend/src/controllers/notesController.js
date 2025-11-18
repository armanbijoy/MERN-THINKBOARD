export const getAllNotes = (req,res)=>{
   res.status(200).send('you just fetch  notes')
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

