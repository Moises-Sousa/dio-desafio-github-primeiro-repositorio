/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kiômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/
class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciakm, precoCombustivel){
        return distanciakm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new carro('fiat', 'prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new carro('fiat', 'preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));

