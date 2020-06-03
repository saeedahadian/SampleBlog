"use strict";

/**
 * Modules
 */
const express = require('express');
const router = express.Router();

// Models
const User = require('../models/user');


/**
 * Handle routes.
 */
router.post('/addUser', (req, res) => {
  // Make a new user from the model.
  const NEW_USER = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    male: req.body.male
  });

  // Save the user in the database.
  NEW_USER.save((err, user) => {
    if (err) return res.status(500).send("Something went wrong!");
    return res.json({
      user,
      message: "User added successfully!"
    });
  });
});


/**
 * Export the module for use in "app.js."
 */
module.exports = router;
