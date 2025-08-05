
function calculo(FormaPGT, precoETQ) {
if (FormaPGT === 1) {
    return(precoETQ - (precoETQ * 0.1));
} 
else if (FormaPGT === 2) {
    return(precoETQ * (precoETQ * 0.15));
} 
else if (FormaPGT === 3) {
    return(precoETQ)
} 
else {
    return(precoETQ + (precoETQ * 0.1));    
}
}

const valor = calculo(1, 200);
console.log("O valor final é: R$", valor);



