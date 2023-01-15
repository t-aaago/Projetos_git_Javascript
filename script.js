function validação(user, senha){
    return user === 'Pedro' && senha == 1234
    }

let acesso = validação('Pedro', 1234)


if (acesso){
    console.log('acesso garantido')
} else {
    console.log('acesso negado')
}