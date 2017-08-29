var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curso_node'
});

module.exports = function(){
    this.all = function(){

        con.query('SELECT * FROM clientes', function(erro, resultado){
            console.log(resultado);
        });

        return [
            {nome: 'teste nome', email:'123'}
        ];
    };

    return this;

};
 