const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  title: String,
  description: String,
  date: String, // month day year
  statusTask: true,
});

module.exports = model('Task', taskSchema);
