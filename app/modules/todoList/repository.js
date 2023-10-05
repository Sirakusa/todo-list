// require('./connection');
const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  title: {
    type: String,
    default: 'New Task',
  },
  description: String,
  date: {
    type: String,
    default: () => {
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      return `${month}-${day}-${year}`;
    },
  }, // month day year
  statusTask: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Task', taskSchema);
