const express = require('express');
const app = express();
const port = 8080;

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

app.get('/home', (req, res) => {
	res.sendFile(__dirname + '/home.html');
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

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;