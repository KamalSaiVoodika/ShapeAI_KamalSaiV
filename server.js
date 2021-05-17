const express = require("express");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
  var n = Number(req.body.N1);
  var m = Number(req.body.N2);
  res.send("Their Sum is " + String(n+m));
});

app.listen(3000,function(){
  console.log("Server has started on Port 3000!!")
});
