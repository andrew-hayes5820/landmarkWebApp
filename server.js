// below line pulls a file from the node_moldules location called 'express'
var express = require('express');
// below line pulls a file from the node_moldules location called 'body-parser'
var bodyParser = require('body-parser');
// below line pulls a file from the node_moldules location called 'request'
var request = require('request');
// 'express server' way to create the 'express' server
var app = express();
// using server on port 8080
var port = process.env.PORT || 8080;


app.use(bodyParser.json({ type: 'application/*+json' }));
// get static files and place in 'public' folder under root directory '__dirname' is the root directory
app.use(express.static(`${__dirname}/public`));

app.get('/', function(req, res){
	res.sendFile(`${__dirname}/public/index.html`);  // If it does not work on heroku, use res.render("index"); or maybe the same past used here
});

//proxy for google places
app.get('/api-places', function(req, res){
	var baseUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
	var url = req.url.replace(req.path, baseUrl);
	request(url, function(err, response, body){
		if(err){
			return res.json(err);
		}

		if(body) {
			body = JSON.parse(body);
		}

		res.json(body);
	});
});

app.get('/api-map', function(req, res){
	var baseUrl = "https://maps.googleapis.com/maps/api/geocode/json"
	var url = req.url.replace(req.path, baseUrl);
	request(url, function(err, response, body){
		if(err){
			return res.json(err);
		}

		if(body) {
			body = JSON.parse(body);
		}

		res.json(body);
	});
});

app.get('/api-details', function(req, res){
	var baseUrl = "https://maps.googleapis.com/maps/api/place/details/json"
	var url = req.url.replace(req.path, baseUrl);
	request(url, function(err, response, body){
		if(err){
			return res.json(err);
		}

		if(body) {
			body = JSON.parse(body);
		}

		res.json(body);
	});
});


app.listen(port, function(){
	console.log('listening on localhost:8080');
});
