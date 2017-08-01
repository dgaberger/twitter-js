const express = require("express");
const app = express();
const volleyball = require("volleyball")
const nunjucks = require("nunjucks")
const routes = require('./routes');
const socketio = require("socket.io");



//logger
app.use(volleyball)

const server = app.listen(3001, function(req, res){
	console.log("listening")
})
const io = socketio.listen(server)

app.use('/', routes(io));

// app.get("/news", function(req, res){
// 	res.send("This is the news")
// })

// app.get("/", function(req, res){
// 	res.render("index", locals)
// })


// boilerplate
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

