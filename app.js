const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var weight = 135;
var target = 145;
var height = 175;

var foodsAdded = [];

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/home.html');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/add', (req, res) => {
	res.sendFile(__dirname + '/add.html');
});

app.get('/foodnut', (req, res) => {
	res.sendFile(__dirname + '/foodnut.html');
});

app.get('/logout', (req, res) => {
	res.sendFile(__dirname + '/logout.html');
});

app.get('/nutrition', (req, res) => {
	res.sendFile(__dirname + '/nutrition.html');
});

app.get('/profile', (req, res) => {
	res.sendFile(__dirname + '/profile.html');
});

app.get('/progress', (req, res) => {
	res.sendFile(__dirname + '/progress.html');
});

app.get('/settings', (req, res) => {
	res.sendFile(__dirname + '/settings.html');
});

app.post('/changeSettings', (req, res) => {
	//res.sendFile(__dirname + '/home.html');
	weight = req.body.weight;
	height = req.body.height;
	target = req.body.target;

	res.sendFile(__dirname + '/submit.html');
});

app.get('/getThings', (req, res) => {
	var toSend = {
		weight: weight,
		height: height,
		target: target,
	}

	res.json(toSend);
})

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;