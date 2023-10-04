const { json } = require('body-parser');
const express = require('express');
const router = require('./router');
const config = require('./config');

const app = express();
// conectar a db
app.use(json());

router(app);

app.listen(config.PORT);
