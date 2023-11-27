const input = require('readline-sync');
const new_tarefa = require('./new_tarefa');
const editar = require('./editar');

module.exports = function opção(cod) {
    switch(cod){
        case 1:
            let name = String(input.question('Nome: '));
            let dia = String(input.question('Data(dd/mm/aaaa): '));
            new_tarefa(name, dia);
            break;
        case 2:
            var id = Number.parseInt(input.question('Id da tarefa: '));
            editar(1, id);
            break;
        case 3:
            var id = Number.parseInt(input.question('Id da tarefa: '));
            editar(2, id);
            break;
    }
}