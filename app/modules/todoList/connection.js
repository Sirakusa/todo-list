const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/todo-list';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('data base is on');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
