const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = Schema({
  title: {
    type: String,
    required: true,
    max: 100,
    unique: false
  },
  body: {
    type: String,
    required: true
  }
});

Notes = module.exports = mongoose.model("Notes", NoteSchema);
