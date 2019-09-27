const express = require("express");
const router = express.Router();
const db = require("../db/dbHelper");

router.get("/notes", async (req, res) => {
  try {
    const allNotes = await db.getNotes();
    res.status(201).json({ allNotes });
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

router.post("/notes/add", async (req, res) => {
  try {
    const { title, body } = req.body;
    if (title && body) {
      const savedNote = await db.addNote(req.body);

      res.status(201).json({ savedNote });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/notes/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    if (title && body) {
      const updatedNote = await db.editNote(req.body);

      if (updatedNote.n === 1) {
        return res.status(201).json({ updatedNote });
      } else {
        res.status(500).json({ message: updatedNote });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await db.deleteNote(id);

    if (deletedCount.n === 1) {
      res.status(201).json(deletedCount.n);
    } else {
      res.status(501).json({ message: deletedCount });
    }
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

module.exports = router;
