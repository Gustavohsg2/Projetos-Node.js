const fs = require('fs');
const input = require('readline-sync');

const jsonfs = fs.readFileSync('paciente.json', {encoding: 'utf8'});

const objpaci = JSON.parse(jsonfs);


function new_paciente(name, idade, peso, altura, doença, edd){
    objpaci.pranchetas.push({
        nome: 'Gustavo', 
        idade: 16, 
        peso: 76, 
        altura: 1.87, 
        doença: ['Gripe', 'Dor'],
        endereço: 'Rua vinhedo',
        ações: {
            consultas: [], //
            cirurgias: [],  //{nome: '', médico: '', data: '', situação: ''}
        },
        contato: [{Num_pai: 0, Num_mae: 0, email_pai: '', email_mae: ''}]
    });

    const objJSON = JSON.stringify(objpaci, null, 2);

    fs.writeFileSync('paciente.json', objJSON);
}

new_paciente();