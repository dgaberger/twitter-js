const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require("body-parser")


// parser boilerplate //
    // create application/json parser
    var jsonParser = bodyParser.json()
    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
// parser boilerplate //


module.exports = function(io){



  //allows access to public files
  router.use(express.static('public'));

  //form submission route
  router.post('/tweets', urlencodedParser, function(req, res) {
  	//console.log(req.body)
    var name = req.body.name;
    var text = req.body.text;
    //console.log(name)
    tweetBank.add(name, text);

    io.sockets.emit('newTweet', {name: name, content: text}); 

    res.redirect('/');
  });

  //basic routing
  router.get('/users/:name', function(req, res) {
    var n = req.params.name;
    var tweets = tweetBank.find( {name: n} );
    //console.log('my tweets', tweets)
    res.render( 'index', { tweets: tweets, name: n, showForm:true} );
  });

  router.get('/tweets/:uniqID', function(req, res) {
    var uniqID = req.params.uniqID;
    var tweets = tweetBank.find( {uniqID: uniqID} );
    res.render( 'index', { tweets: tweets } );
  });

  router.get('/', function (req, res) { //
    const tweets = tweetBank.list();
    //console.log(tweets);
    res.render( 'index', { tweets: tweets, showForm: true});
  });



  return router
}