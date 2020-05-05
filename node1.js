var http = require("http");
var url = require("url");

http.createServer(
    (req,res) => {
        console.log("Req " + req.url);
        res.writeHead(200, {"Content-Type" : "text/html"});
        var q = url.parse(req.url,true).query;
        res.end("Hello world "+q.q+q.qq);
    }
).listen(80);