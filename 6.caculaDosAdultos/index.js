if (lista.length >= 1 && lista.length <= 1000) {

    let maiorIdade = false
    let menorIdade = Infinity;

    for (let item of lista) {
        if (item >= 18) {
            maiorIdade = true
            if (menorIdade > item) {
                menorIdade = item
            }
        }
    }

    if (maiorIdade) {
        console.log(menorIdade);
    } else {
        console.log('CRESCA E APARECA');
    }
}