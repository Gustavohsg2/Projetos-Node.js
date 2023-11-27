const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

var name = readline.question(`What's your name?`);