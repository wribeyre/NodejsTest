var http = require("http");
//var {mult} = require("./display.js")





http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end(html);

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');