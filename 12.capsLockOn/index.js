function processData(input) {
    let primeiraLetra = input[0];
    let primeiraLetraMaiuscula = input[0].toUpperCase()
    let primeiraLetraMinuscula = input[0].toLowerCase()
    let restoTexto = input.slice(1)
    let restoTextoMaiusculo = input.slice(1).toUpperCase()
    let restoTextoMinusculo = input.slice(1).toLowerCase()

    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else if (primeiraLetra === primeiraLetraMinuscula && restoTexto === restoTextoMaiusculo) {
        console.log(`${primeiraLetraMaiuscula}${restoTextoMinusculo}`);
    } else {
        console.log(input);
    }
}