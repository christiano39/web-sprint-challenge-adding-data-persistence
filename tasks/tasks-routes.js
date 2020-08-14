const express = require("express");

const Tasks = require("./tasks-model");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getAll()
    .then((tasks) => {
      res.status(200).json({ tasks });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  Tasks.insert(req.body)
    .then((task) => {
      res.status(200).json({ task });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
