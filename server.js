const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const path = require('path');

const books = require('./routes/api/books');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
 .connect(db)
 .then(() => console.log("mongoDB connected"))
 .catch(err => console.log(err));

 //use ports
app.use('/api/books', books);
 // app.use('/api/books', require('./routes/api/books'));

 //variable holding port process.env.port to deploy to heroku easier
const port = process.env.PORT || 5000;
 
 //server listening
app.listen(port, () => console.log(`server listening on ${port}`));