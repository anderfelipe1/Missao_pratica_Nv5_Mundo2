const cors = require('cors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const app = express();
const livroRouter = require('./routes/livros');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/', indexRouter);  
app.use('/livros', livroRouter);
app.use(cors());


module.exports = app;
