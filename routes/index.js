/*
 * GET home page.
 */
var labs = require('../labs.json');

exports.view = function(req, res){
  res.render('index', {
	'labs': labs
  });
};
