var http = require('http');


var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render(`site/home.ejs`);
});
app.get('/contato', function(req,res){
    res.render(`/contato`);
});

app.listen(5000, function(){
    console.log("localhost:5000");
});