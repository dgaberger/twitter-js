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



router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});







module.exports = router;