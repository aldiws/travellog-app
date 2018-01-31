const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');


const index = require('./routes/index');
const destination = require('./routes/destination')
const plan = require('./routes/plan')
const profile = require('./routes/profile')



// view engine
// app.set('view', path.join(__dirname, 'views'));
app.set('views', './views'); 
app.set('view engine', 'ejs');


// body parser middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
	extended: false
}));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profile',express.static(path.join(__dirname, 'public')));

// set routes
app.use('/', index);
app.use('/destination', destination)
app.use('/plan', plan)
app.use('/profile', profile)

app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));