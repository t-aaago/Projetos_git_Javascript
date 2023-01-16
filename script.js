let cores = ['azul', 'preto', 'verde']


//versão com length
for (i = 0; i < cores.length; i++){
    console.log(cores[i])
}

//versão com in
for(let i in cores) {
    console.log(cores[i])
}

//versão com of
for(let cor of cores){
    console.log(cor)
}