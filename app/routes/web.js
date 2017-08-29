//Importando o Modelo Cliente 
var clienteModel = require('../models/clienteModel')();
//Criando um Modelo de Rotas
module.exports = function(app){

    app.get('/', function(req,res){
        //console.log(clienteModel.all());
        var listaClientes = clienteModel.all();
        res.render(`site/home`, {clientes:listaClientes});
    });
    app.get('/contato', function(req,res){
        res.render(`site/contato`);
    }); 

}