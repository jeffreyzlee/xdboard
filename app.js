const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var docClient = new AWS.DynamoDB.DocumentClient();


var weight = 135;
var target = 145;
var height = 175;

var foodsAdded = [];

app.get('/home', (req, res) => {
	console.log(foodsAdded);
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
});

app.post('/addFood', (req, res) => {
	var params = {
        TableName: "Foods",
        Item: req.body
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add movie. Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:");
       }
    });
});

app.get('/foodToAdd', (req, res) => {
	var toSend = {
		foodsAdded: [],
	};

	var params = {
	    TableName: "Foods",
	};

	docClient.scan(params, (err, data) => {
		if (err) {
        	console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        	res.json(toSend);
    	} else {
        	// print all the movies
        	console.log(toSend.foodsAdded);
        	var i = 0;
        	for(i = 0; i < data.Items.length; i++){
        		toSend.foodsAdded.push(data.Items[i]);
        	}

        	res.json(toSend);
    	}
	});



	
});

app.get('/help', (req, res) => {
	res.sendFile(__dirname + '/help.html');
});

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;