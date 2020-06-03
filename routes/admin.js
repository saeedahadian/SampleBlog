"use strict";

/**
 * Modules
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser({ extended: false });

// Models
const User = require('../models/user.js');


/**
 * Handle routes.
 */
router.get('/allUsers', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send("Something went wrong!");
    return res.json(users);
  });
});


// Export the module for use in "app.js" file.
module.exports = router;
