"use strict";

// Import the mongoose module & its Schema property.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create the user schema.
const UserSchema = new Schema({
  username: {
    type: String,
    unique: [true, "Usernames must be unique."],
    required: [true, "Each must have a username!"]
  },
  firstName: {
    type: String,
    maxlength: [20, "Whose name is that long?"],
    required: false
  },
  lastName: {
    type: String,
    maxlength: [20, "Whose name is that long?"],
    required: false
  },
  age: {
    type: Number,
    max: [150, "You can't be serious!"],
    required: false
  },
  male: {
    type: Boolean,
    required: true
  }
});


// Export the user model.
module.export = mongoose.model('User', UserSchema);
