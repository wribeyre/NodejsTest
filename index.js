var express = require('express')
var bodyparser = require('body-parser');
var app = express()
var mult = require("./display.js").mult;
var request = require('request');


var html=`
<form action="/" method="post">
    <input type=text name=input-a />
    <input type=text name=input-b />
    <button type=submit>Send</button>
</form>
`;

app.use(bodyparser.urlencoded({extended: true}));//

app.get('/', function(req, res) {
   res.send(html);
});

app.post('/', function(req, res) {
  res.send('Result is: '+ mult(parseInt(req.body["input-a"]),parseInt(req.body["input-b"])));
});



app.get('/user/info/:userId', function(req, res) {
  //res.send("userId is set to " + req.params.userId);

    request('http://swapi.co/api/people/12/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body);
     }
})
});

app.listen(3000, function () {
  
  console.log('Example app listening on port http://localhost:3000!')
  console.log('Try also this route: http://localhost:3000/user/info/1234')
})

