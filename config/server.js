
//Criando um Função do Serve 
module.exports = function(){ 

//Adiciona o Express
var express = require('express');
//Adiciona Body Parser
var bodyParser = require('body-parser');
//Adiciona Express Validator
var expressValidator = require('express-validator');

//Atribui o Express na Variavel
var app = express();

//Seta o as View com EJS
app.set('view engine', 'ejs');

//Seta outra pasta para a views
app.set('views', './app/views');

//Configuracao Express Validator
app.use(expressValidator());

//Configuracao Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Importando as Rotas
require('../app/routes/web')(app);

//Criando a Porta 5000
app.listen(5000, function(){
    console.log("localhost:5000");
});

}