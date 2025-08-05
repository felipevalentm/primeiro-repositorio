class Pessoa {
    nome;
    idade;
    anodeNASC;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anodeNASC = 2025 - this.idade;
    }

    descrever() {
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

function compararP(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + ' é mais velho(a) do que ' + p2.nome);
    } else if (p2.idade > p1.idade) {
        console.log(p2.nome + ' é mais velho(a) do que ' + p1.nome);
    } else {
        console.log(p1.nome + ' e ' + p2.nome + ' têm a mesma idade');
    }
}

const vitor = new Pessoa ('Vitor', 25);
const renan = new Pessoa ('Renan', 45);

compararP(vitor, renan);





 