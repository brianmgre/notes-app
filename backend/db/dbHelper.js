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

      return await note.save();
    } catch (err) {
      return err;
    }
  },

  //deletes one note
  deleteNote: async id => {
    try {
      return await Notes.deleteOne({ _id: `${id}` });
    } catch (err) {
      return err;
    }
  },

  //edits note
  editNote: async editedNote => {
    try {
      const { _id, title, body } = editedNote;
      return await Notes.updateOne(
        { _id: `${_id}` },
        { $set: { title: title, body: body } }
      );
    } catch (err) {
      return err;
    }
  }
};
