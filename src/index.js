'use strict'

const fibonacci = () => {
    let sequencia = [0];
    let num1 = 1;
    let num2 = 1;

    while(num1 < 350){
        if (num2 < 350){
            sequencia.push(num1, num2)
        } else {
            sequencia.push(num1)
        }
        num1 = num1 + num2
        num2 = num1 + num2
    }
    return sequencia;
}

const isFibonnaci = (num) => {
    if(fibonacci().indexOf(num) > -1) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    fibonacci,
    isFibonnaci
}
