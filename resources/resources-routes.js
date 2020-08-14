const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getAll()
    .then((resources) => {
      res.status(200).json({ resources });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  Resources.insert(req.body)
    .then((resource) => {
      res.status(201).json({ resource });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//stretch

router.get("/:id/projects", (req, res) => {
  Resources.getProjects(req.params.id)
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
