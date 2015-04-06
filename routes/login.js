var express = require('express');
var passport = require('passport')
var User = require('../models/user')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(req.user) {
    res.redirect('/dashboard')
  } else {
    res.render('pages/login', { user: req.user })
  }
});

router.post('/', passport.authenticate(
  'local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}))

module.exports = router;
