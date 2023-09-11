const periodo = numeros.length;
const soma = numeros.reduce(function (acumulador, atual) {
    return acumulador + atual;
});
const restoNumero = soma % periodo;
let posicao;
if (restoNumero === 0) {
    posicao = periodo;
} else {
    posicao = restoNumero;
}
console.log(posicao);