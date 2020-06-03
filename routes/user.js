"use strict";

/**
 * Modules
 */
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const urlencodeParser = bodyParser({ extended: false });

// Models
const User = require('../models/user');


/**
 * Handle routes.
 */
router.post('/addUser', urlencodeParser, (req, res) => {
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
    if (err) return res.status(500).send("Something went wrong!" + err);
    return res.json({
      user,
      message: "User added successfully!"
    });
  });
});


router.put('/updateUser/:userId', urlencodeParser, (req, res) => {
  User.findByIdAndUpdate(req.params.userId, req.body, { new: true },
    (err, user) => {
      if (err) return res.status(500).send("Something went wrong!" + err);
      return res.json(user);
    });
});


router.delete("/deleteUser/:userId", urlencodeParser, (req, res) => {
  User.findByIdAndDelete(req.params.userId, (err, user) => {
    if (err) return res.status(500).send("Something went wrong!" + err);
    if (!user) return res.status(404).send("User not found!");
    return res.json(user);
  });
});


/**
 * Export the module for use in "app.js."
 */
module.exports = router;
