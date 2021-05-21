const arreglo = [];

function nuevoArreglo(a){
    while(arreglo.length < a){
        let numero = arreglo.length + 1;
        arreglo.push(numero)
    }
    console.log(arreglo)
}

nuevoArreglo(10);