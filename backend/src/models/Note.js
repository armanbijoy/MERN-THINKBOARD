import mongoose from "mongoose"

// Define a schema for the Note model
const noteSchema = new mongoose.Schema(
  {
    // Title of the note, required field
    title: {
      type: String,
      required: true,
    },
    // Content of the note, required field
    content: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true
  }
)

// Create a Mongoose model named "Note" using the schema

const Note = mongoose.model("Note", noteSchema)


export default Note
