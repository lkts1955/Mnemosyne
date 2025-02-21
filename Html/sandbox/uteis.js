

const numeros = [5, 8, 12, 15, 3, 20, 7];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez); // Deve retornar [12, 15, 20]


// ========================

const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
const nomesComA = nomes.filter(nome => nome.startsWith("A"));
console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]

// =========================

const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  const produtosBaratos = produtos.filter(produtos => produtos.preco < 50)      // Use filter aqui
  console.log(produtosBaratos); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]

// ==================================================================

const pessoas = [
    { nome: "Carlos", idade: 17 },
    { nome: "Mariana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Fernanda", idade: 30 }
  ];
  const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18)// Use filter aqui
  console.log(maioresDeIdade); // Deve retornar [{ nome: "Mariana", idade: 22 }, { nome: "Fernanda", idade: 30 }]
  

  // =======================================


  const produtosx = [
    { id: 1, nome: "Teclado", preco: 100 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Monitor", preco: 700 }
  ];
  
  // Procurar o produto com preço 700
  const produtoCaro = produtosx.find(produto => produto.preco == 700);
  console.log(produtoCaro); // { id: 3, nome: "Monitor", preco: 700 }
  
// ============================================================

const nomesx = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = nomesx.find(nome => nome == "Amanda");
console.log(amanda); // Deve retornar "Amanda"

// ==================================================================

const listaDeUsuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
  ];
  
  const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
  
  console.log(usuarioEncontrado); 
  // Deve retornar { id: 2, nome: "Bruno" }
  

// ====================================================================

const produtosy = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  const produtoBuscado = produtosy.find(prod => prod.nome == "Fone de ouvido");             // Use find aqui
  console.log(produtoBuscado); // Deve retornar { nome: "Fone de ouvido", preco: 80 }

// ========================================================================================

const pessoasz = [
    { nome: "Carlos", idade: 17 },
    { nome: "Mariana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Fernanda", idade: 30 }
  ];
  const maiorDeIdade = pessoasz.find(indiv => indiv.idade >= 18)                // Use find aqui
  console.log(maiorDeIdade); // Deve retornar { nome: "Mariana", idade: 22 }
  

  // ================================================

const palavras = ["olá", "mundo", "javascript"];
const enfatizadas = palavras.map(palavra => palavra + "!!!");
console.log(enfatizadas); // ["olá!!!", "mundo!!!", "javascript!!!"]


// =========================================

const nomesa = ["ana", "bruno", "carla"];
const nomesMaiusculos = nomesa.map(nom => "Colaborador : " + nom); // Colocar o código aqui
console.log(nomesMaiusculos); // ["Colaborador: ana", "Colaborador: bruno", "Colaborador: carla"]

// ========================================

const pessoasb = [
    { nomeb: "João", idade: 25 },
    { nomeb: "Maria", idade: 30 },
    { nomeb: "Carlos", idade: 28 }
  ];
  const nomesso = pessoasb.map(pessoa => pessoa.nomeb);
  console.log(nomes); // ["João", "Maria", "Carlos"]

  // =====================================================================

const raios = [3, 5, 7];
const areas = raios.map(raio => Math.PI * Math.pow(raio, 2));
console.log(areas); // [28.27, 78.54, 153.94] (valores aproximados)


// =========================================================================

const precos = [10, 25.5, 3.99, 7];
const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2).replace('.', ',')}`);
console.log(precosFormatados); // ["R$ 10,00", "R$ 25,50", "R$ 3,99", "R$ 7,00"]

// =====================================================

const notas = [95, 82, 74, 63, 49];
const conceitos = notas.map(nota => {
  if (nota >= 90) return "A";
  if (nota >= 80) return "B";
  if (nota >= 70) return "C";
  if (nota >= 60) return "D";
  return "F";
});
console.log(conceitos); // ["A", "B", "C", "D", "F"]
