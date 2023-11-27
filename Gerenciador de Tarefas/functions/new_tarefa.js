const fs = require("fs");
module.exports = function new_tarefa(name, data){
    const jsonfs = fs.readFileSync('./tarefa.json', {encoding: 'utf8'});
    let obj = JSON.parse(jsonfs);
    obj.table.push({nome: name, date: data, info: 'Não-Feito'});
    const objJSON = JSON.stringify(obj, null, 2);
    fs.writeFileSync('./tarefa.json', objJSON);
    //atua();
}