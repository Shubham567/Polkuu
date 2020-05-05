var express = require("express");
var path = require("path");
var app = express();

app.set("port", process.env.PORT || 3000);

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index", {
    message: "Hey everyone! This is my webpage."
    });
});

console.log("Reached Here");

app.listen(app.get("port"), function() {
    console.log("App started on port " + app.get("port"));
});