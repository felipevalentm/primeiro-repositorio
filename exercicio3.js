const valor = 18.5
const pagamento = "debito"

const debito = valor - ((10/100) * valor)
const pix = valor - ((15/100) * valor)
const credito2vezes = valor
const credito3vezes = valor + ((10/100) * valor)

if (pagamento == "debito") {
    console.log("O valor do produto é :", debito);
}
else if (pagamento == "pix") {
    console.log("O valor do produto é :", pix);
}
else if (pagamento == "credito 2x") {
    console.log("O valor do produto é :", credito2vezes);
}
else if (pagamento == "credito 3x") {
    console.log("O valor do produto é :", credito3vezes);
}