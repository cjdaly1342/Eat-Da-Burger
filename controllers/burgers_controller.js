var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers')
}); // End router.get('/', function(req, res))

router.get('/burgers', function(req, res) {
	burgers.all(function(data) {
		var exphbs = {burgers: data};

		console.log(exphbs);

		res.render('index', exphbs);
	}); // End burgers.all(function(data))
}); // End router.get('/burgers', function(req, res))

router.post('/burgers/create', function(req, res) {
	burgers.create(['burger_name'], [req.body.burger_name], function(data) {
		res.redirect('/burgers');
	}); // End burgers.create(['burger_name'], [req.body.burger_name], function(data))

}); // End router.post('/burgers/create', function(req, res))

router.put('/burgers/update/:Id', function(req, res) {
	var condition = 'Id = ' + req.params.Id;

	console.log('condition ', condition);

	burgers.update({'devoured': req.body.devoured}, condition, function(data) {
		res.redirect('/burgers');
	}); // End burgers.update({'devoured': req.body.devoured}, condition, function(data))
}); // End router.put('/burgers/update/:Id', function(req, res))

module.exports = router;