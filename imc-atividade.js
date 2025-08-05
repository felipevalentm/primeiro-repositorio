
function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function resultadoIMC(imc) {
    if (imc < 18.5) {
    return "Abaixo do peso";
}
    else if (imc >= 18.5 && imc < 25) {
    return "Peso nomrmal";
}
    else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
}
    else if (imc >= 30 && imc < 40) {
    return "Obeso";
}
    else if (imc >= 40) {
    return "Obesidade grave";
}
}

// Main
(function () {
   const peso = 84
const altura = 1.85

const imc = calcularIMC(peso, altura)
console.log(resultadoIMC(imc)); 
}) ();









