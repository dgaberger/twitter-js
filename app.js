const express = require("express");
const app = express();
const volleyball = require("volleyball")
const nunjucks = require("nunjucks")

//logger
app.use(volleyball)

app.listen(3001, function(req, res){
	console.log("listening")
})


app.get("/news", function(req, res){
	res.send("This is the news")
})

app.get("/", function(req, res){
	res.send("Welcome Buddy")
})



//nunjucks
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

//nunjucks.configure('views', {noCache: true});
// var renderHTML = nunjucks.render("index.html", locals, function(err, output){
// 	console.log(output)
// })
// app.set('view engine', 'html'); // have res.render work with html files
// app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
// nunjucks.configure('views'); // point nunjucks to the proper directory for templates

