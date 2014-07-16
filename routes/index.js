var express = require('express');
var router = express.Router();

/* GET home page / render the home page */
router.get('/', function(req, res) {
  res.render('index', { title: 'stormpathSessions Home', user: req.user});
});

router.get('/dashboard', function(req, res) {
	if (!req.user || req.user.status !== 'ENABLED') {
		return res.redirect('/login');
	}

	res.render('dashboard', {title: 'Dashboard', user: req.user});
})

module.exports = router;
