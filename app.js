"use strict";

/**
 * Modules
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/user.js');


/**
 * Create a mongoose connection.
 */
let mongoDB = 'mongodb://localhost:27017/SampleBlog';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Bind the mongoose connection errors to the conosle.
let db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));


/**
 * Setup the template engine.
 */
app.set('view engine', 'ejs');


/**
 * Handle routes.
 */
app.use(express.static('./public'));
app.use('/', userRouter);


/**
 * Listen on port 3000.
 */
app.listen(3000, () => console.log("Server is running smoothly :-)"));
