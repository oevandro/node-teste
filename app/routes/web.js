//Importando o Modelo Cliente 
var clienteController = require('../controllers/clienteController');
//Criando um as Rotas
module.exports = function(app){

    //HOME
    app.get('/', function(req,res){
        clienteController.index(req,res);    
    });

    //CONTATO
    app.get('/contato', function(req,res){
        res.render(`site/contato`);
    }); 

}