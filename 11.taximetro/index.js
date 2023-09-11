let tarifaTempo = 0;
let tarifaKm = 0;

if (min <= 20) {
    tarifaTempo = min * 50;
} else {
    tarifaTempo = 1000 + (min - 20) * 30;
}
if (km <= 10) {
    tarifaKm = km * 70;
} else {
    tarifaKm = 700 + (km - 10) * 50;
}

const valorTotal = tarifaKm + tarifaTempo

console.log(valorTotal);