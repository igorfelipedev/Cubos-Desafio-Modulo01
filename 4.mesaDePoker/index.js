if (valores.length > 1 && valores.length <= 1000) {
    const valoresFiltrados = valores.filter(function (valor) {
        return valor >= min && valor <= max
    })
    console.log(valoresFiltrados);
}