/*greet = require('./lib/greet.js');
greet.newSayHello("Arnab");
console.log(main.require)
*/
var http = require('http');

http.createServer(function (request, response) {

    //any method any path
    //response:hello world(text)

    console.log("req recieved");
    response.statusCode = 200;
    response.end("Babaji ka thullu ... ");

}).listen(3000, function () {
    console.log("server started at port 3000");
});

console.log("Created a server");
