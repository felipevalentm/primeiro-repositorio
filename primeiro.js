const gasosa = 6.27;
const etanol = 5.89;

const tipo = prompt("Qual tipo do combustivel: gasosa ou etanol ")

const gastoKporL = 10 

const distanciaKM = 1.136

const resultado1 = (distanciaKM / gastoKporL) * etanol
const resultado2 = (distanciaKM / gastoKporL) * gasosa

if (tipo == "gasosa") {
    console.log(resultado2);
}
else if (tipo == "etanol") {
    console.log(resultado1);
}

