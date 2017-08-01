const express = require("express");
	const app = express();
const volleyball = require("volleyball")
const nunjucks = require("nunjucks")
const routes = require('./routes');
const socketio = require("socket.io");

//logger
app.use(volleyball)

//server init
const server = app.listen(3001, function(req, res){
	console.log("listening")
})
const io = socketio.listen(server)

//router
app.use('/', routes(io));

// nunjucks boilerplate
nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


