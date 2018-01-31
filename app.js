const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const path = require('path');
const multer = require('multer');

const check_login = require('./helpers/auth').check_login;
const flash_message = require('./helpers/message').flash_message;

// view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));
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
app.use(flash_message);


// set routes
app.use('/', require('./routes/auth'));
app.use('/dashboard', check_login, require('./routes/dashbord'));
app.use('/destination', check_login, require('./routes/destination'));
app.use('/profile', check_login, require('./routes/user'));
app.use('/settings', check_login, require('./routes/setting'));


app.use((req, res, next) => {
	res.render('error')
});

app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));