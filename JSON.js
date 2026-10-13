//exercicio 1

const personagem = {
    altura: '2.00',
    forca : '80000',
}

var propriedades = Object.keys(personagem);

if (!(propriedades.includes('nome'))) {
  console.log('Nome não esta presente ')
}

//exercicio 2

const personagem2 = {
    nome : 'Kratos',
    altura: '1.80',
    força : '80000',
};

var propriedades = Object.keys(personagem2);

console.log(propriedades);

//exercicio 3 

const aplicativo = {
    nome : 'Instagram',
    usuarios: '3 bilhões',
    valorDeMercado : '440 Bilhões de dolares',
};

for (let chave in aplicativo) {
  console.log(chave, aplicativo[chave]);
};

//exercício 4

const usuarios = [{
  nome : 'Neno',
  idade : 22,
  email : 'bobao@gmail.com',
  numero : '1198992990',
},{ 
  nome : 'Nora',
  idade : 24,
  email : 'bobasso@gmail.com',
  numero : '11989923330',
}];

console.log (usuarios[1].nome);


//exercício 5

const jogo = {
  nome : 'The Last Of Us Parte 2',
  protagonista :'Ellie',
  nota : 10,
}

var copiaDeObjeto = Object.assign(jogo);

console.log(copiaDeObjeto);

//exercício 6

const usuarios2 = [
{ nome: "Ana", idade: 17 },
{ nome: "Carlos", idade: 20 },
{ nome: "João", idade: 15 },
{ nome: "Marina", idade: 22 }
];

var maioresDeIdade = usuarios.filter((user) => user.idade > 18);

console.log(maioresDeIdade);

//exercício 7

const cores = ["azul", "vermelho", "azul", "verde", "vermelho", "azul"];

const ocorrencias = cores.reduce(function (objeto, cor){
  objeto[cor]=(objeto[cor] || 0)+1;
  return objeto;
},{})

console.log(ocorrencias);

// exercício 8

const produtos = [
{ id: 1, nome: "Mouse" },
{ id: 2, nome: "Teclado" },
{ id: 3, nome: "Monitor" }
];

for (var i = 0; i<produtos.length; i++){
  porId[[produtos[i].id]] = produtos[i];
};
console.log(porId);

// exercício 9 

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const sobreposto = { ...obj1, ...obj2 };

console.log(sobreposto);

//exercício 10 

const dados = {
nome: "Carlos",
idade: null,
email: "carlos@email.com",
telefone: undefined
};

const filtro = Object.entries(dados).filter(([chave, valor]) => valor !== null && valor !== undefined
  );

const objetofinal = Object.fromEntries (filtro);

console.log(objetofinal);



