const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

// view engine
app.set('view', path.join(__dirname, 'views'));
app.set('views', './views'); 
app.set('view engine', 'ejs');

// body parser middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
	extended: false
}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// set routes
app.use('/', index);

app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));