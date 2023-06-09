var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var addSecurity = require('./middlewares/security')

var indexRouter = require('./routes/index');
var formRouter = require('./routes/form');

var app = express();

addSecurity(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/myform', formRouter);

module.exports = app;
