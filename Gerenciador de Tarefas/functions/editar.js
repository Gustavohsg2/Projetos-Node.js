const fs = require('fs');
module.exports = function editar(tar, id) {
    const jsonfs = fs.readFileSync('./tarefa.json', {encoding: 'utf8'}) ;
    let obj = JSON.parse(jsonfs);   
    tar == 1 ? obj.table.splice(id-1, 1) : obj.table[id-1].info = 'Feito';     
    const objJSON = JSON.stringify(obj, null, 2);
    fs.writeFileSync('./tarefa.json', objJSON);
}