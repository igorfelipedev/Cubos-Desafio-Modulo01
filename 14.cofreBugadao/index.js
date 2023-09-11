function processData(input) {
    const linhas = input.split("\n");
    const senhaCorreta = linhas[0];
    const senhaDigitada = linhas[1];

    let senhaCorretaIndex = 0;

    for (let i = 0; i < senhaDigitada.length; i++) {
        if (senhaDigitada[i] === senhaCorreta[senhaCorretaIndex]) {
            senhaCorretaIndex++;
        }

    }
    if (senhaCorretaIndex === senhaCorreta.length) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }

}