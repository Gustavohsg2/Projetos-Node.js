const fs = require('fs');
module.exports = function tabela() {
    console.clear();
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'});
    let obj = JSON.parse(jsonfs);
    console.log('ID |');
    for(var x = 0; x <= obj.table.length-1; x++){
        console.log(`${x+1}° |\t${obj.table[x].nome}\n   |Situação: ${obj.table[x].info}\t|\n   |Data: ${obj.table[x].date}\t|\n`);
    }
}