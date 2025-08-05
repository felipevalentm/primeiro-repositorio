const nota1 = 45
const nota2 = 75
const nota3 = 86

const media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
    console.log("Você está reprovado");
}
else if (media >= 5 && media < 7) {
    console.log("Você está de recuperação");
}
else if (media >= 7) {
    console.log("Você está de aprovado");
}

console.log("Sua média é: ", media)

