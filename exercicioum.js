
class Carros {
marca;
cor;
gasto;

constructor(marca, cor, gasto) {
 this.marca = marca;
 this.cor = cor;
 this.gasto = gasto;
 }

valorGasolina (km, preco) {
return(km*this.gasto) * preco;
 }

}

const fiat = new Carros('Fiat', 'Verde', 25);
console.log(fiat.valorGasolina(73, 5));

const jeep = new Carros('Jeep', 'Preto', 45);
console.log(jeep.valorGasolina(73, 10));
