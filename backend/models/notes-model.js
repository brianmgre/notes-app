const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = Schema({
  title: {
    type: String,
    require: true,
    max: 30,
    unique: false
  },
  body: {
    type: String,
    require: true
  }
});

Notes = module.exports = mongoose.model("Notes", NoteSchema);
