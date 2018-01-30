const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const multer = require('multer')

const checkLoginHandler = require('./helpers/auth').checkLoginHandler;
const flashMessageHandler = require('./helpers/message').flashMessageHandler;

// view engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth/', express.static(path.join(__dirname + '/public')));
app.use('/profile/', express.static(path.join(__dirname + '/public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(cookieParser());
app.use(session({
	key: 'userId',
	secret: 'catch-me-if-you-can',	
	cookie: {
		maxAge: 360000
	}
}));
app.use(flashMessageHandler);

// set routes
app.use('/', require('./routes/auth'));
app.use('/dashbord',checkLoginHandler, require('./routes/dashbord'));
app.use('/profile', require('./routes/user'));
app.use('/settings', require('./routes/setting'));

app.use('/destination', require('./routes/destination'));


app.use((req, res, next) => {
	// res.status(404).send("Sorry can't find that!")
	res.render('error')
});

app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));