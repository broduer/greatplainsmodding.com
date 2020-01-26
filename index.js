// project init
const express = require('express');
const app = express();

// Load Routes
const mainRoute = require('./routes/mainRoute');

// App Settings
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Set Routes
app.use('/', mainRoute);

// Start Express Server
app.listen(4000, () => console.log('Express Server started on port 2000'));