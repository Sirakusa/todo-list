const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/myweb';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open');

mongoose.connection.on('error', (err) => {
  throw new Error(err);
});
