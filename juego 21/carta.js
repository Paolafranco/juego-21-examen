class Carta {
    numero = 0
    figura = '';
    valor1 = 0;
    valor2 = 0;
    dobleValor = false;
    constructor(numero, figura, valor1, valor2, dobleValor) {
        this.numero = numero;
        this.figura = figura;
        this.valor1 = valor1;
        this.valor2 = valor2;
        //esta variable sirve para saber si la carta tiene dos valores como por ejemplo el a y el 1 que vale  11 y 1
        if (valor1 == valor2) {

            this.dobleValor = false;
        } else {
            this.dobleValor = true;
        }
    }
}