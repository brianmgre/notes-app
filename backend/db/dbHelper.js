const Notes = require("../models/notes-model");
const db = require("./config");

module.exports = {
  //get all notes
  getNotes: async () => {
    try {
      const allNotes = await Notes.find();
      if (allNotes) {
        return allNotes;
      }
    } catch (err) {
      return err;
    }
  },

  //adds a note
  addNote: async newNote => {
    try {
      let note = new Notes();
      (note.title = newNote.title), (note.body = newNote.body);

      const saveNote = await note.save();

      if (saveNote) {
        return saveNote;
      }
    } catch (err) {
      return err;
    }
  },

  //deletes one note
  deleteNote: async id => {
    try {
      const deleteNote = await Notes.deleteOne({ _id: `${id}` });

      if (deleteNote.n === 1) {
        return deleteNote;
      }
    } catch (err) {
      return err;
    }
  }
};
