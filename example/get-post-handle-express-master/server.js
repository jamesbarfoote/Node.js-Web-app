




var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use("/", express.static(__dirname + '/public'));//serve up the website

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Add headers
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access­Control­Allow­Origin', '*')
//   // // Request methods you wish to allow
//   res.setHeader('Access­Control­Allow­Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   // Request headers you wish to allow ,
//   res.setHeader('Access­Control­Allow­Headers', 'Content­Type, Access­Control­Allow­Headers')
//   // Pass to next layer of middleware
//   next()
// })


//Get
app.get('/',function(req,res){
//  res.sendFile("C:/Users/james/Dropbox/University/2016/Tri 1/NWEN 304/A1/project1-p2/example/get-post-handle-express-master/index.html");
});

//Put: Used to create or update a specific task
app.put('/', function (req, res) {
  res.send('Got a PUT request at');
});

//Delete
app.delete('/', function (req, res) {
  res.send('Got a DELETE request');
});

//Post: Used to update or modify an existing task
app.post('/login',function(req,res){
  var user_name=req.param('user')
  var password=req.param('password')
  console.log("From Client pOST request: User name = "+user_name+" and password is "+password)
  res.end("yes");
});






  app.listen(port, function () {
    console.log('Example app listening on port 8080!')
  })
