var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ✅ Module 5: Initialize Mongoose / MongoDB connection + models (moved to app_api)
require('./app_api/models/db');

// Website (MVC) routes still live in app_server
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');

// ✅ Module 5: API routes now live in app_api (Separation of Concerns)
var apiRouter = require('./app_api/routes/index');

var app = express();

// view engine setup (still using app_server views)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// ✅ Module 5: Mount API under /api
app.use('/api', apiRouter);

// Optional: ONLY if your instructor expects /API exactly (capital letters)
app.use('/API', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
