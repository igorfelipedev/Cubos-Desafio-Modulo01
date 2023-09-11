if (precos.length < 3) {
    const somaDoisItens = precos.reduce(function (acumulador, atual) {
        return acumulador + atual
    })
    console.log(somaDoisItens);
} else if (precos.length <= 100) {
    let menor = Infinity;
    let soma = 0;
    for (let item of precos) {
        soma += item
        if (item < menor) {
            menor = item
        }
    }
    const somaComDesconto = soma - menor / 2
    console.log(somaComDesconto);
}