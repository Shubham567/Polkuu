var express = require("express");
var path = require("path");
var bodyParser  = require("body-parser");
var logger = require("morgan");

var app = express();

app.set("port", process.env.PORT || 3000);

var entries = [];
app.locals.entries = entries;

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: false }));



app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index");
});

app.get("/favicon.ico",(req,res) => {
    res.sendFile("favicon.ico");
})

app.get("/new-entry", function(request, response) {
    response.render("new-entry");
});

app.post("/new-entry", function(request, response) {
    if (!request.body.title || !request.body.body) {
        response.status(400).send("Entries must have a title and a body.");
        return;
    }
    entries.push({
        title: request.body.title,
        content: request.body.body,
        published: new Date()
    });
    response.redirect("/");
});

app.use(function(request, response) {
    response.status(404).render("404");
});

app.listen(app.get("port"), function() {
    console.log("App started on port " + app.get("port"));
});