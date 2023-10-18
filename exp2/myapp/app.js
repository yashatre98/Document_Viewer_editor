
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const listingRouter= require('./routes/listings')
const createRouter= require('./routes/create')



var app = express();

app.use(logger('dev')); // writes summaries of requests to the console
app.use(express.json()); // checks if the request body is formatted in JSON and converts it from a string to an object if so
app.use(express.urlencoded({ extended: false })); // checks if the request body is formatted as URL-encoded form data and converts it from a string to an object if so
app.use(cookieParser()); // checks for the presence of a cookie string in the headers and converts it into an easier to use data structure
app.set('view engine', 'ejs');

app.use('/',listingRouter);
app.use('/create', createRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/listing.html'))
});


module.exports = app;
