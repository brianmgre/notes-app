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
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
  } catch (err) {
    res.status(501).json({ message: err });
  }
});

module.exports = router;
