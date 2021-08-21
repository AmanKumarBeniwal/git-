const express = require('express');
require('dotenv').config();

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const port = process.env.port || 5000;
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,useUnifiedTopology: true 
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/note.routes.js')(app);

// listen for requests
app.listen(port, () => {
    console.log("Server is listening on port",port);
});