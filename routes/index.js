const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require("body-parser")


//boilerplate parser shit
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// router.get('/stylesheets/style.css', function(req, res) {
//     // console.log()
//     //res.location('/style.css')
//     res.sendFile('public/stylesheets/style.css', { root:  __dirname}); 
// });

//allows access to public files
router.use(express.static('public'));

//form submission route
router.post('/tweets', urlencodedParser, function(req, res) {
	console.log(req.body)
  var name = req.body.name;
  var text = req.body.text;
  console.log(name)
  tweetBank.add(name, text);
  res.redirect('/');
});

//basic routing
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );

  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:uniqID', function(req, res) {
  var uniqID = req.params.uniqID;
  var tweets = tweetBank.find( {uniqID: uniqID} );

  res.render( 'index', { tweets: tweets } );
});

router.get('/', function (req, res) { //
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets, showForm: true});
});







module.exports = router;