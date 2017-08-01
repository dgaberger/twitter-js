const express = require("express");
const app = express();
const volleyball = require("volleyball")
const nunjucks = require("nunjucks")
const routes = require('./routes');



//logger
app.use(volleyball)

app.listen(3001, function(req, res){
	console.log("listening")
})

app.use('/', routes);

// app.get("/news", function(req, res){
// 	res.send("This is the news")
// })

// app.get("/", function(req, res){
// 	res.render("index", locals)
// })



//		nunjucks		//
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Sam'}
    ]
};



// below just a test?	//
// nunjucks.render("index.html", locals, function(err, output){
// 	console.log(output)
// })


// boilerplate
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

