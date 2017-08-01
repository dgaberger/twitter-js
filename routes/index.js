const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


// router.get('/stylesheets/style.css', function(req, res) {
//     // console.log()
//     //res.location('/style.css')
//     res.sendFile('public/stylesheets/style.css', { root:  __dirname}); 
// });


router.use(express.static('public'));

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );

  res.render( 'index', { tweets: tweets } );
});




router.get('/', function (req, res) { //
  let tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { tweets: tweets } );
});







module.exports = router;