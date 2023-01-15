function calc_casa(metragem, quartos){
    
    let m2 = 3000;
    let valor_inicial = metragem * m2;
    let valor_final = 0

    switch(quartos){
        case 1:
            default:
            valor_final = valor_inicial;
            break;
        case 2:
            valor_final = valor_inicial * 1.2;
            break;
        case 3:
            valor_final = valor_inicial * 1.5;
            break;
    }
    return valor_final
}

let valor = calc_casa(123, 3)

console.log(`A casa custa ${valor}`)

