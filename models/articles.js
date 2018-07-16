const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  name: string,
  title: string
})

module.exports = mongoose.model('Article', articleSchema);
