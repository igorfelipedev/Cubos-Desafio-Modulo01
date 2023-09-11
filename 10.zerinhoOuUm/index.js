let zero = [];
let um = [];

for (let elemento of jogadores) {
    if (elemento.jogada === 0) {
        zero.push(elemento)
    } else {
        um.push(elemento)
    }
}
if (zero.length === 1) {
    console.log(zero[0].nome);
} else if (um.length === 1) {
    console.log(um[0].nome);
} else {
    console.log('NINGUEM');
}