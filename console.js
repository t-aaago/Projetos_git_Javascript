console.log(process.argv)
get = require('/home/tiago/Javascript/NodeJS/getflag.js')

console.log(`Olá ${get('--nome')} ${get('--sobrenome')}, tudo bom?`)
