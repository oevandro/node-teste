
//Criando um Modelo de Rotas
module.exports = function(app){

    app.get('/', function(req,res){
        res.render(`site/home.ejs`);
    });
    app.get('/contato', function(req,res){
        res.render(`site/contato`);
    }); 

}