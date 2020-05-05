console.log("Hello World");

var url = require("url");

var parsedUrl = url.parse("http://google.com?q=search");

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.query);