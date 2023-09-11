if (texto.length < 5000) {
    let textoArray = texto.trim().split(' ');
    let textoFormatado = textoArray.filter(function (item) {
        return item !== '';
    });
    console.log(textoFormatado.length);
}