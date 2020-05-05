var express = require("express");
var path = require("path");
var app = express();


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index", {
    message: "Hey everyone! This is my webpage."
    });
});

console.log("Reached Here");

app.listen(8080);