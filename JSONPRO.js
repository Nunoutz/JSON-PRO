//JSON 1

const cotacao = {
  n_cotacao: 192839,
  data: "2023-10-01",
  proponente: {
    nome: "João da Silva",
    dt_nascimento: "1985-05-15",
    cpf: "123.456.789-00"
  },
  produto: {
    nome: "Empresarial",
    cod: "EMP1312",
    versao: 1
  },
  itens: [
    {
      localRisco: {
        cep: "12345-678",
        cidade: "São Paulo",
        estado: "SP",
        endereco: "Rua das Flores, 123"
      },
      valorD: 20349.50,
      valorL: 25000.00,
      coberturas: [
        {
          nome: "Incêndio",
          tipo: "Básica",
          valor: 15000.00
        },
        {
          nome: "Roubo",
          tipo: "Adicional",
          valor: 5000.00
        },
        {
          nome: "Responsabilidade Civil",
          tipo: "Adicional",
          valor: 10000.00
        },
        {
          nome: "Danos Elétricos",
          tipo: "Adicional",
          valor: 3000.00
        },
        {
          nome: "Lucros Cessantes",
          tipo: "Adicional",
          valor: 2000.00
        }
      ]
    },
    {
      localRisco: {
        cep: "12345-678",
        cidade: "São Paulo",
        estado: "SP",
        endereco: "Rua das Flores, 902"
      },
      valorD: 30000.00,
      valorL: 15000.00,
      coberturas: [
        {
          nome: "Incêndio",
          tipo: "Básica",
          valor: 37000.00
        },
        {
          nome: "Roubo",
          tipo: "Adicional",
          valor: 8000.00
        },
        {
          nome: "Danos Elétricos",
          tipo: "Adicional",
          valor: 3000.00
        }
      ]
    },
    {
      localRisco: {
        cep: "87654-321",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        endereco: "Avenida Atlântica, 456"
      },
      valorD: 91500.50,
      valorL: 70300.00,
      coberturas: [
        {
          nome: "Incêndio",
          tipo: "Básica",
          valor: 13000.00
        },
        {
          nome: "Roubo",
          tipo: "Adicional",
          valor: 90000.00
        },
        {
          nome: "Responsabilidade Civil",
          tipo: "Adicional",
          valor: 35000.00
        },
        {
          nome: "Danos Elétricos",
          tipo: "Adicional",
          valor: 7000.00
        }
      ]
    }
  ],
  premio: 1500000.00
};


//exercício 1.1

// Para cada item, usa o 'reduce' para acumular `cobertura.valor`.

cotacao.itens.forEach(item=>{
    const valor = item.coberturas.reduce((acumulador,elemento)=> acumulador+elemento.valor,0);
    console.log("Valor total do Item ", valor);
});


//exercício 1.2

//Usa o '.some()' duas vezes: a externa percorre os itens e a interna percorre as coberturas

const valormaiorbul = (cotacao) => cotacao.itens.some((item) =>
    item.coberturas.some((c) => c.tipo === "Básica" && c.valor > item.valorD)
  );

    console.log(valormaiorbul(cotacao));

//exercício 1.3

//para cada item, filtra apenas as coberturas adicionais, soma seus valores com 'reduce' e compara com 'item.valorL'. '.some()' retorna assim que achar o primeiro caso.

const valorLinferior = (cotacao) =>
  cotacao.itens.some((item) => {
    const adicionais = item.coberturas.filter((c) => c.tipo === "Adicional");
    return item.valorL < adicionais.reduce((acc, c) => acc + c.valor, 0);
  });

console.log(valorLinferior(cotacao)); 

//JSON 2

const cotacoes = [
    {
        n_cotacao: 287623,
        data: "2023/10/02",
        proponente: {
            nome: "Carla Mendes",
            dt_nascimento: "1990/08/22",
            cpf: "987.654.321/99"
        },
        produto: {
            nome: "Residencial",
            cod: "RES2024",
            versao: 2
        },
        itens: [
            {
                localRisco: {
                    cep: "11030/200",
                    cidade: "Santos",
                    estado: "SP",
                    endereco: "Rua do Porto, 45"
                },
                valorD: 15000.00,
                valorL: 10000.00,
                coberturas: [
                    { nome: "Incêndio", tipo: "Básica", valor: 10000.00 },
                    { nome: "Roubo", tipo: "Adicional", valor: 3000.00 },
                    { nome: "Danos Elétricos", tipo: "Adicional", valor: 2000.00 }
                ]
            }
        ],
        premio: 850000.00
    },
    {
        n_cotacao: 234523,
        data: "2023/10/03",
        proponente: {
            nome: "Lucas Ferreira",
            dt_nascimento: "1995/06/10",
            cpf: "789.123.456/22"
        },
        produto: {
            nome: "Comercial",
            cod: "COM3123",
            versao: 3
        },
        itens: [
            {
                localRisco: {
                    cep: "40010/000",
                    cidade: "Salvador",
                    estado: "BA",
                    endereco: "Av. Sete de Setembro, 100"
                },
                valorD: 50000.00,
                valorL: 45000.00,
                coberturas: [
                    { nome: "Incêndio", tipo: "Básica", valor: 25000.00 },
                    { nome: "Roubo", tipo: "Adicional", valor: 10000.00 },
                    { nome: "Responsabilidade Civil", tipo: "Adicional", valor: 8000.00 },
                    { nome: "Lucros Cessantes", tipo: "Adicional", valor: 2000.00 }
                ]
            },
            {
                localRisco: {
                    cep: "40010/001",
                    cidade: "Salvador",
                    estado: "BA",
                    endereco: "Av. Sete de Setembro, 200"
                },
                valorD: 30000.00,
                valorL: 25000.00,
                coberturas: [
                    { nome: "Incêndio", tipo: "Básica", valor: 15000.00 },
                    { nome: "Roubo", tipo: "Adicional", valor: 5000.00 },
                    { nome: "Danos Elétricos", tipo: "Adicional", valor: 3000.00 }
                ]
            }
        ],
        premio: 650000.00
    },
    {
        n_cotacao: 109722,
        data: "2023/10/04",
        proponente: {
            nome: "Fernanda Souza",
            dt_nascimento: "1982/12/03",
            cpf: "456.789.123/11"
        },
        produto: {
            nome: "Industrial",
            cod: "IND6543",
            versao: 4
        },
        itens: [
            {
                localRisco: {
                    cep: "30130/110",
                    cidade: "Belo Horizonte",
                    estado: "MG",
                    endereco: "Rua da Indústria, 250"
                },
                valorD: 120000.00,
                valorL: 110000.00,
                coberturas: [
                    { nome: "Incêndio", tipo: "Básica", valor: 60000.00 },
                    { nome: "Danos Elétricos", tipo: "Adicional", valor: 15000.00 },
                    { nome: "Responsabilidade Civil", tipo: "Adicional", valor: 30000.00 }
                ]
            },
            {
                localRisco: {
                    cep: "30130/110",
                    cidade: "Belo Horizonte",
                    estado: "MG",
                    endereco: "Rua da Indústria, 250"
                },
                valorD: 80000.00,
                valorL: 60000.00,
                coberturas: [
                    { nome: "Incêndio", tipo: "Básica", valor: 40000.00 },
                    { nome: "Roubo", tipo: "Adicional", valor: 10000.00 }
                ]
            }
        ],
        premio: 1800000.00
    },
    {
        n_cotacao: 209743,
        data: "2023/12/01",
        proponente: {
            nome: "Lucas Ferreira",
            dt_nascimento: "1995/06/10",
            cpf: "789.123.456/22"
        },
        produto: {
            nome: "Agrícola",
            cod: "AGR7890",
            versao: 1
        },
        itens: [
            {
                localRisco: {
                    cep: "75800/000",
                    cidade: "Rio Verde",
                    estado: "GO",
                    endereco: "Fazenda Boa Vista, KM 12"
                },
                valorD: 45000.00,
                valorL: 30000.00,
                coberturas: [
                    { nome: "Incêndio", tipo: "Básica", valor: 20000.00 },
                    { nome: "Fenômenos da Natureza", tipo: "Adicional", valor: 15000.00 },
                    { nome: "Roubo", tipo: "Adicional", valor: 5000.00 }
                ]
            }
        ],
        premio: 320000.00
    },
    {
        n_cotacao: 312456,
        data: "2023/11/15",
        proponente: {
            nome: "Ana Paula Costa",
            dt_nascimento: "1988/04/20",
            cpf: "321.654.987/33"
        },
        produto: {
            nome: "Saúde",
            cod: "SAU4567",
            versao: 1
        },
        itens: [
            {
                localRisco: {
                    cep: "01000/000",
                    cidade: "São Paulo",
                    estado: "SP",
                    endereco: "Avenida Paulista, 1000"
                },
                valorD: 20000.00,
                valorL: 15000.00,
                coberturas: [
                    { nome: "Internação Hospitalar", tipo: "Básica", valor: 12000.00 },
                    { nome: "Consultas Médicas", tipo: "Adicional", valor: 5000.00 },
                    { nome: "Exames Laboratoriais", tipo: "Adicional", valor: 3000.00 }
                ]
            }
        ],
        premio: 409000.00
}];

//exercício 2.1

// 'transformadorCNPJ' remove tudo que não for dígito da string, o que permite que a comparação seja por valor numérico.

const transformadorCNPJ = (s) => String(s).replace(/\D/g, "");

//Percorre a lista de cotações comparando o CPF  de cada proponente com o documento passado.'.some()' devolve true se encontrar ao menos uma ocorrência.

const verificadorDeDoc = (documento, lista = cotacoes) => {
  const alvo = transformadorCNPJ(documento);
  return lista.some(
    (cot) => transformadorCNPJ(cot.proponente.cpf) === alvo
  );};

console.log("'789.123.456-22' existe?", verificadorDeDoc("789.123.456-22"));
console.log("'000.000.000-00' existe?", verificadorDeDoc("000.000.000-00"));

//exercício 2.2 

// 'filter' mantém apenas as cotações com prêmio < 500000 e '.lengt' retorna quantas sobraram. O limite é está passado diretamente no parâmetro da função, já na sua declaração

const premiosinf = (limite = 500000, lista = cotacoes) =>
    lista.filter((cot) => cot.premio < limite).length;

console.log("Numero de premios inferiores a 500000", premiosinf());

//exercício 2.3

// 'gerarChave' cria uma string única a partir dos campos do 'localRisco'. Essa string é usada como "hash" para identificar se o mesmo endereço já apareceu.

function gerarChave(localRisco) {
  const padronizado = {
    cep: localRisco.cep,
    cidade: localRisco.cidade,
    estado: localRisco.estado,
    endereco: localRisco.endereco
  };
  return JSON.stringify(padronizado);
}

// 'analisarCotacao' retorna um resumo com 'temDuplicado' e a lista dos locais repetidos, reconvertidos de string para objeto.

function analisarCotacao(cotacao) {
  const jaVistos = [];
  const repetidos = [];

  for (const item of cotacao.itens) {
    const chave = gerarChave(item.localRisco);

    if (jaVistos.includes(chave)) {
      if (!repetidos.includes(chave)) {
        repetidos.push(chave);
      }
    } else {
      jaVistos.push(chave);
    }
  }

  return {
    n_cotacao: cotacao.n_cotacao,
    proponente: cotacao.proponente.nome,
    totalItens: cotacao.itens.length,
    temDuplicado: repetidos.length > 0,
    locaisRepetidos: repetidos.map((texto) => JSON.parse(texto))
  };
}

const relatorios = [];
let contador = 0;

// Aplica 'analisarCotacao' em cada cotação e conta quantas apresentaram pelo menos um local duplicado.

for (const cotacao of cotacoes) {
  const relatorio = analisarCotacao(cotacao);
  relatorios.push(relatorio);
  if (relatorio.temDuplicado) {
    contador++;
  }
}

console.log("Cotações com localRisco duplicado:", contador);

//exercício 2.4

// 'resumirItem' percorre as coberturas de um item somando 'valor' e devolve um objeto com a quantidade e o total das coberturas.

function resumirItem(item) {
  let total = 0;
 
  for (const cobertura of item.coberturas) {
    total += cobertura.valor;
  }
 
  return {
    quantidadeCoberturas: item.coberturas.length,
    valorTotalCoberturas: total
  };
}

// 'resumirCotacao' monta o objeto final combinando dados do proponente com o resumo de cada item.

 function resumirCotacao(cotacao) {
  return {
    n_cotacao: cotacao.n_cotacao,
    proponente: cotacao.proponente.nome,
    itens: cotacao.itens.map((item) => resumirItem(item)),
    premio: cotacao.premio
  };
}

// 'montarTexto' transforma o resumo em uma string de várias linhas: cabeçalho (nº e proponente), um bloco por item e o valor do prêmio.

function montarTexto(resumo) {
  const linhasItens = resumo.itens.map((item) => [
    "- Quantidade de coberturas: " + item.quantidadeCoberturas,
    "- Valor total de coberturas: " + item.valorTotalCoberturas
  ]);
 
  const linhas = [
    "N Cotacao: " + resumo.n_cotacao,
    "Nome Proponente: " + resumo.proponente,
    "Itens"
  ];
 
  for (const par of linhasItens) {
    linhas.push(par[0]);
    linhas.push(par[1]);
  }
 
  linhas.push("Valor Premio: " + resumo.premio);
 
  return linhas.join("\n");
}
 
const resumos = cotacoes.map((cotacao) => resumirCotacao(cotacao));
const textos = resumos.map((resumo) => montarTexto(resumo));
 
textos.forEach((texto) => console.log(texto + "\n"));