
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
