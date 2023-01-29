//get recebe o modulo criado no arquivo getflag.js
get = require('/home/tiago/Javascript/NodeJS/getflag.js')

//apenas um teste do uso de flags
console.log(`Olá ${get('--nome')} ${get('--sobrenome')}, tudo bom?`)
