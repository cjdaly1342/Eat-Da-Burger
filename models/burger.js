var orm = require('../config/orm.js');

var burgers = {
	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res);
		}); // End orm.all('burgers', function(res))
	},
	create: function(col, vals, cb) {
		orm.create('burgers', col, vals, function(res) {
			cb(res);
		}); // End orm.create('burgers', col, vals, function(res))
	},
	update: function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res) {
			cb(res);
		}); // End orm.update('burgers', objColVals, condition, function(res))
	}
};

module.exports = burgers;