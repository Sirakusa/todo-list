const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  title: String,
  description: String,
  date: String,
  id: Number,
});

model.exports = model('Task', taskSchema);
