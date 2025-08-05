class Pessoa {
    nome;
    altura;
    peso;

  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
 }

 calcularImc() {
    return this.peso / (this.altura * this.altura);
 }

 classificarImc() {
    const Imc = this.calcularImc();
    if (Imc < 18.5) {
    return "Abaixo do peso";
    }  
    else if (Imc >= 18.5 && Imc < 25) {
    return "Peso nomrmal";
    }  
    else if (Imc >= 25 && Imc < 30) {
    return "Acima do peso";
    }   
    else if (Imc >= 30 && Imc < 40) {
    return "Obeso";
    }   
    else if (Imc >= 40) {
    return "Obesidade grave";
    }
 }    
    

}

const José = new Pessoa ('José', 1.70, 70);
console.log(José);
console.log(Vitor.classificarImc().toFixed(2));

const Vitor = new Pessoa ('Vitor', 1.90, 80);
console.log(Vitor);
console.log(Vitor.classificarImc().toFixed(2));



