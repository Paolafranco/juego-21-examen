class Fabrica {
    crearCartas(mazoCartas) {
        var nombresCartas = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        var pintas = ['CORAZON ROJO', 'CORAZON NEGRO', 'TREBOL', 'DIAMANTE'];
        /* 1._ cogemos pintas de la variable hacemos
           2._ for each
           3._ realizamos una funcion que va a realizar el salto entre 
               las difernetes pintas de las cartas*/
        pintas.forEach(function(nombrePinta) {
            /* 1._ cogemos nombres cartas de la variablehacemos
               2._ for each
               3._ realizamos una funcion que va a realizar 
                   un barrido entre todos los numeros por cada pinta y pondremos el indice*/
            nombresCartas.forEach(function(numeroCarta, indice) {
                // pondremos que la carta 1 y 2  (es la carta A) va iniciar de 0
                var valorCarta1 = 0
                var valorCarta2 = 0
                    //si el indice"A" es igual a = 0
                if (indice == 0) {
                    //aqui nos dice que la carta a valga 1 y 11
                    valorCarta1 = 1
                    valorCarta2 = 11
                } else {
                    //en cambio, si el indice es > a 9 vamos hacer que a partir de 9 nos de 10
                    if (indice > 9) {
                        valorCarta1 = 10
                        valorCarta2 = 10
                } else {
                    /* si no, a los numeros entre (dos y 10) van a tener mas 1 
                       si no, vamos a ir incrementando un valor*/
                        valorCarta1 = indice + 1
                        valorCarta2 = indice + 1
                    }
                }
                /* 1._ colocamos el mazoCartas 
                   2._ PUSH:
                   3._ creamos una nueva Carta
                   4._ que va a tener el numero de carta, el nombre de la pinta, 
                   el valor de la carta 1 que es el "A" y el valor de la carta 2 que 
                   igualmente es el "A"
                */
                mazoCartas.push(new Carta(numeroCarta, nombrePinta, valorCarta1, valorCarta2))
            });
        });
        return;
    }


    verCartasMazo(mazoCartas) {
        /* 1._ mazoCartas
           2._ forEach
           3._realizamos una funcion que tendra un parametro llamado carta
        */
        mazoCartas.forEach(function(carta) {
            //console.log(carta.numero + ' ' + carta.figura)
        });
    }


    pedirCarta(mazoCartas, player) {
        /* 1._ creamos una variable cartasRetiradas
           2._ sera igual al mazoCartas 
           3._ SPLICE:
           4._ Math.florr sirve para rendondear la sifra menor del numero decimal y
               obtener un entero 
           5._ Match.random se utiliza para tener un numero aleatorio entre 0 y 1, y
               multiplicar por el tamaño 
           6._ * mazoCartas.length), 1): multiplica a mazoCartas y 
           actual del array para obtener  un numero alealtorio*/
        var cartasRetiradas = mazoCartas.splice(Math.floor(Math.random() * mazoCartas.length), 1)
        var textoCarta = ''
        var dobleCarta = false
        cartasRetiradas.forEach(function(carta) {
            player.mano.push(carta);
            textoCarta = carta.numero + ' ' + carta.figura
        });


        var suma = 0
        player.mano.forEach(function(carta) {
            //suma todos los valores de todas las cartas de la mano 
            if (carta.dobleValor)
                dobleCarta = true
            suma = suma + carta.valor2
        });



        if (suma > 21 & dobleCarta) {
            suma = 0
            player.mano.forEach(function(carta) {
                //suma todos los valores de todas las cartas de la mano
                //console.log(carta.numero + ' '+ carta.figura) 
                suma = suma + carta.valor1
            });
        }
        //console.log(suma)
        player.puntaje = suma
        return textoCarta;
    }
}
