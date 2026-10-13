var numeroexercicio = 0;
 
    function cabecalho(){
  numeroexercicio++
  return console.log ("\n Saida exercicio",numeroexercicio);
}
// Exercícios 1

cabecalho();

const nomes = ["nuno","neno","nara","leao"];

for (var i = 0; i<nomes.length; i++){
  console.log (nomes[i]);
}

 // Exercícios 2

cabecalho();

var novosnomes = ["gumball","clarencio","finn","jake"];

novosnomes.push("steven");

for (var i = 0; i<novosnomes.length; i++){
  console.log (novosnomes[i]);
}

 // Exercícios 3

cabecalho();


var novosnovosnomes = ["sans","kris","frisk","chara"];

const primeirachave = novosnovosnomes.shift();


for (var i = 0; i<novosnovosnomes.length; i++){
  console.log (novosnovosnomes[i]);
}
    console.log("elemento removido do array foi", primeirachave);


 // Exercícios 4

cabecalho();


var array4 = ["Ted","Lilly","Marshal","Barney"];

  console.log (array4.indexOf("Ted"))


 // Exercícios 5

cabecalho();

var array5 = ["Clem","Lee","Kenny","Carl"];

console.log (array5.sort());

 // Exercícios 6

cabecalho();


var array6 = ["Hornet","Knight","Radiance","Zote"];

console.log (array6.reverse());

//Exercício 7

cabecalho();

const array7 = ["Deltarune", "Mine", "Undertale", "Fort"];

array7.filter(function(elemento){
                  return elemento.length>5
              }                              );
//Exercício 8

cabecalho();

const array8 = ["gus", "jesse", "white", "saul"];

console.log (array8.join());

//Exercício 9

cabecalho();

const mineplaylist = ["wait", "warmth", "sweden", "dreiton"];

console.log(mineplaylist.includes("dreiton"));

//Exercício 10

cabecalho();

const numbers = [1,2,3,4,5];

var quadrado = numbers.map(function (valor){
                    valor=valor*valor;
                return valor;
            });

console.log(quadrado);

//Exercício 11

cabecalho();

const artistas = ["Laufey", "Fiona", "Boa", "Ozzy"];

console.log (artistas.every(nome=>nome.length>5));

//Exercício 12

cabecalho();

const array12 = [1889,130,670,10,45];

console.log (array12.some(valor=>valor>500));
