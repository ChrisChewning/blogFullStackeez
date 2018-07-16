const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: String
});

//Author is now the name of the database.
module.exports = mongoose.model('Author', authorSchema);
