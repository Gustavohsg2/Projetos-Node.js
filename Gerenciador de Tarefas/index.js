const input = require('readline-sync');
const fs = require("fs");
dia = new Date();

function new_tarefa(name, data){
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'});
    let obj = JSON.parse(jsonfs);
    obj.table.push({nome: name, date: data, info: 'Não-Feito'});
    const objJSON = JSON.stringify(obj, null, 2);
    fs.writeFileSync('tarefa.json', objJSON);
    atua();
}
function editar(tar, id) {
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'}) ;
    let obj = JSON.parse(jsonfs);   
    tar == 1 ? obj.table.splice(id-1, 1) : obj.table[id-1].info = 'Feito';     
    const objJSON = JSON.stringify(obj, null, 2);
    fs.writeFileSync('tarefa.json', objJSON);
    atua();
}
function atua() {
    console.clear();
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'});
    let obj = JSON.parse(jsonfs);
    for(var x = 0; x <= obj.table.length-1; x++){
        console.log(`${x+1}° |\t${obj.table[x].nome}\nSituação: ${obj.table[x].info}\t|\tData:\t${obj.table[x].date}\t|`);
    }
}
do{
    atua();
    var y;
    var resp = Number.parseInt(input.question('\n\n\nO que você deseja fazer?\n\n1) - Add New Tarefa\n2) - Excluir Tarefa\n3) - Mudar situação\n4) - Sair\n\nOpção: '));
    if(resp==1){
        let name = String(input.question('Nome: '));
        new_tarefa(name, dia.getDate());
    }else if(resp == 2){
        var id = Number.parseInt(input.question('Id da tarefa: '));
        editar(1, id);
    }else if(resp == 3){
        var id = Number.parseInt(input.question('Id da tarefa: '));
        editar(2, id);
    }else if(resp == 4){
        y = 2;
    }
    /*
    switch(resp){
        case 1:
            let name = String(input.question('Nome: '));
            new_tarefa(name, dia.getDate());
            break;
        case 2:
            var id = Number.parseInt(input.question('Id da tarefa: '));
            editar(1, id);
            break;
        case 3:
            var id = Number.parseInt(input.question('Id da tarefa: '));
            editar(2, id);
            break;
        case 4:
            y = 2;
            break;
    }
    */
}while(y != 2);