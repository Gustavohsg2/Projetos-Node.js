const input = require('readline-sync');
const tabela = require('./functions/tabela');
const opção = require('./functions/opção');

do{
    tabela();
    var resp = Number.parseInt(input.question('\n\n\nO que você deseja fazer?\n\n1) - Add New Tarefa\n2) - Excluir Tarefa\n3) - Mudar situação\n4) - Sair\n\nOpção: '));
    opção(resp);
}while(resp != 4);