
class Pessoas {
nome;
peso;
altura;

constructor(nome, peso, altura) {
 this.nome = nome;
 this.peso = peso;
 this.altura = altura;
 }

calcularIMC (pesoPessoa, alturaPessoa) {
return pesoPessoa / (alturaPessoa*alturaPessoa);
}
}

const Neymar = new Pessoas ('Neymar', 88, 1.77);
console.log(Neymar.calcularIMC(88, 1.77));





