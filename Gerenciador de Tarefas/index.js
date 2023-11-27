const input = require('readline-sync');
const fs = require("fs");
dia = new Date();

function new_tarefa(name, data){
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'});
    let obj = JSON.parse(jsonfs);
    id = obj.table.length;
    obj.table.push({nome: name, date: data, info: 'Não-Feito',id: id});
    const objJSON = JSON.stringify(obj, null, 2);

    fs.writeFileSync('tarefa.json', objJSON);
    atua();
}

function editar(tar, id) {
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'}) ;
    let obj = JSON.parse(jsonfs);   

    if(tar == 1){
        obj.table[id] = undefined;
    }else{
        obj.table[id].info = 'Feito'; 
    }    

    const objJSON = JSON.stringify(obj, null, 2);
    fs.writeFileSync('tarefa.json', objJSON);
    atua();
}
function atua() {
    clear();
    const jsonfs = fs.readFileSync('tarefa.json', {encoding: 'utf8'});
    let obj = JSON.parse(jsonfs);

    for(var x = 0; x <= obj.table.length-1; x++){
        console.log(`${x+1}° |\t${obj.table[x].name}`);
        console.log(`Situação: ${obj.table[x].info}\t|\tData:\t${obj.table[x].date}\t|\tID:\t${obj.table[x].id}`);
    }
}


do{
    var y;
    var resp = Number.parseInt(input.question('\n\n\nO que você deseja fazer?\n1) - Add New Tarefa\n2) - Excluir Tarefa\n3) - Mudar situação'));
    switch(resp){
        case 1:
            var name = toString(input.question('Nome: '));
            new_tarefa(name, dia.getDate());
            break
        case 2:
            var id = Number.parseInt(input.question('Id da tarefa: '));
            editar(1, id);
            break
        case 3:
            var id = Number.parseInt(input.question('Id da tarefa: '));
            editar(2, id);
            break
    }
}while(y != 2);
console.log('Deseja adicionar uma tarefa?');
//new_tarefa('Limpar', dia.getDate());

//editar(2, 3);