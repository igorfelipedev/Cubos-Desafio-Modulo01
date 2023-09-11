function processData(input) {
    const linhas = input.trim().split('\n');
    const n = parseInt(linhas[0]);
    const funcionarios = [];

    for (let i = 1; i <= n; i++) {
        const [x, y] = linhas[i].split(' ').map(parseFloat);
        funcionarios.push({ x, y });
    }

    function calcularDistancia(xa, ya, xb, yb) {
        return Math.sqrt((xa - xb) ** 2 + (ya - yb) ** 2);
    }

    function calcularMaiorDistancia(funcionarios) {
        let maiorDistancia = 0;
        const n = funcionarios.length;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const distancia = calcularDistancia(funcionarios[i].x, funcionarios[i].y, funcionarios[j].x, funcionarios[j].y);
                if (distancia > maiorDistancia) {
                    maiorDistancia = distancia;
                }
            }
        }

        return maiorDistancia;
    }
    const maiorDistancia = calcularMaiorDistancia(funcionarios);
    console.log(maiorDistancia);
}