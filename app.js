import 'dotenv/config';

import express, { json, urlencoded } from 'express';
// var cors = require('cors');
import cors from 'cors';
import bodyParser from 'body-parser';



// importation du code des sous routeurs
import notesRouter from './routes/notes.js';
import usersRouter from './routes/users.js';

var app = express();

// app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(json());

// Initialisation du Router
app.use('/notes', notesRouter);
app.use('/users', usersRouter);
app.use('/', (req, res) => res.send('et oui on vous souhaite la bienvenue!'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handlers - these take err object.
// these are per request error handlers.  They have two so in dev
// you get a full stack trace.  In prod, first is never setup

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(process.env.SERVER_PORT, () => console.log("Serveur API démarré"));
