
//Criando um Função do Serve 
module.exports = function(){ 

//Adiciona o Express
var express = require('express');

//Atribui o Express na Variavel
var app = express();

//Seta o as View com EJS
app.set('view engine', 'ejs');

//Seta outra pasta para a views
app.set('views', './app/views');

//Importando as Rotas
require('../app/routes/web')(app);

//Criando a Porta 5000
app.listen(5000, function(){
    console.log("localhost:5000");
});

}