import Note from "../models/Note.js";
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    console.log("Error", err);
    res.status(500).json({ message: "Internernal Server Problem" });
  }
};


export const createNotes = async (req, res) => {
 try{
   const {title, content} = req.body
   
   const newNote = new Note({title, content})

   await newNote.save()
   res.status(201).json({message:"Note Created Successfully"})

 }catch(err){
   console.log(err)
 }
};

export const getNoteById = async (req,res)=>{
   try{
      const note = await Note.findById(req.params.id)
      if(!note) return res.status(404).json({message:'Data not found'})
      
      res.status(200).json(note)

   }catch(err){
      console.log(err)
   }
}

export const updateNote = async(req, res) => {

   try{
      const {title, content} = req.body
     const updatedNote =  await Note.findByIdAndUpdate(req.params.id, {title, content})

     if(!updatedNote) return res.status(404).json({message:'Data not found'})

      res.status(200).json(updateNote)

   }catch(err){
      console.log(err)
   }



   
};

export const deleteNote = async (req, res) => {
   try{
      
      const deletedNote =  await Note.findByIdAndDelete(req.params.id)

     if(!deletedNote) return res.status(404).json({message:'Note not found'})

      res.status(200).json(deletedNote)

   }catch(err){
      console.log(err)
   }
};
