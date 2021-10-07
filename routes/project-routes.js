const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Project = require('../models/Project');
const Task = require('../models/Task');

// HTTP methods

// GET <-- read
// POST <-- create <-- not idempotent
// PUT <-- update 
// DELETE <-- delete

// /projects

// POST /projects
router.post('/', (req, res, next) => {

  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: []
  })
    .then(response => {
      res.json(response); // only things that changes from module-2
    })

});


// GET /projects
router.get('/', (req, res, next) => {
  Project.find().populate('tasks')
    .then(allTheProjects => {
      res.json(allTheProjects);
    })
});


// GET /:id
router.get('/:id', (req, res, next) => {

  Project.findById(req.params.id).populate('tasks')
    .then(response => {
      res.json(response);
    })

})



// PUT /:id
router.put('/:id', (req, res, next) => {

  // { new: true } should be our default
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((projectFromDb) => {
      res.json(projectFromDb);
    })

})

// DELETE /:id
router.delete('/:id', (req, res, next) => {

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is removed successfully.` });
    })

})


module.exports = router;