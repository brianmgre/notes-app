const express = require("express");
const router = express.Router();

router.get("/notes", async (req, res) => {});

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
