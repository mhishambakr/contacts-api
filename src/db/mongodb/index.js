const mongoose = require('mongoose');
require('dotenv').config();

const Contact = require('../../modules/contact/contact.schema');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Perform CRUD operations here
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });