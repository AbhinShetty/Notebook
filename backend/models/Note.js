const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user:{
type: mongoose.Schema.Types.ObjectId,
ref:'user'
  },
  title: String,
  description: String,
  tag: String,
  date:Date
  
});

module.exports = mongoose.model("notes", NotesSchema);
