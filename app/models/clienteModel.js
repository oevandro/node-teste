var db = require('../../config/db');

module.exports = function(){
  this.all = function(retorno){
    var con = db();
    return con.query('select * from clientes',retorno);    
  };

  return this;

};