import express from 'express';
import { Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { setupRoutes } from './routes';

let createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

setupRoutes(app);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: Function) {
  next(createError(404));
});

// error handler
app.use(function (err: HttpError, req: Request, res: Response, next: Function) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
