const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json({ project });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// stretch endpoints

router.get("/:id/resources", (req, res) => {
  Projects.getResources(req.params.id)
    .then((resources) => {
      res.status(200).json({ resources });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
