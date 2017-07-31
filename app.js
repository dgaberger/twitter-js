const express = require("express");
const app = express();
const volleyball = require("volleyball")

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

