/* primeira versão com função anonima
let pessoa = {
    nome: 'Tiago',
    sobrenome: 'Oliveira',
    idade: 90,
    nomeCompleto : () => {
        completo = `${nome} ${sobrenome}`
        return completo
    }
}*/


//----------------------------------------------------

/* segunda versão com 'this'
console.log(pessoa.nomeCompleto(pessoa.nome, pessoa.sobrenome))

let pessoa = {
    nome: 'Tiago',
    sobrenome: 'Oliveira',
    idade: 90,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

//"this" refere-se ao próprio objeto

console.log(pessoa.nomeCompleto())
*/