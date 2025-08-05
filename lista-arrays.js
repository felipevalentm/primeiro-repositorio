
const lista = [];

lista.push(50);
lista.push(90);
lista.push(40);
lista.push(30);

let soma = 0;

for (let i = 0; i < lista.length; i++) {
    const nota = lista[i];
    soma = soma + nota;

}

console.log(soma);
