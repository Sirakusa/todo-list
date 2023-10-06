require('./modules/todoList/connection');

const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');
const config = require('./config');

const app = express();
// connected to db
app.use(bodyParser.json());

router(app);

app.listen(config.PORT);
