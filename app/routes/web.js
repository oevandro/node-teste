//Importando o Modelo Cliente 
var clienteController = require('../controllers/clienteController');
//Criando um as Rotas
module.exports = function(app){

    //INDEX
    app.get('/', function(req,res){
        clienteController.index(req,res);    
    });

    //HOME
    app.get('/home', function(req,res){
        clienteController.index(req,res);    
    });

    //SALVAR
    app.post('/', function(req,res){
        clienteController.store(req,res);    
    });

    //CONTATO
    app.get('/contato', function(req,res){
        res.render(`site/contato`);
    }); 

    //DETALHE
    app.get('/detalhe/:id', function(req,res){       
        clienteController.show(req,res);  
    }); 

}