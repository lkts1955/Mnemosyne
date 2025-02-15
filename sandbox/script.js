console.log("Hello World!");

var idade = 22;
var idade = "Vinte e dois";
console.log(idade);

let nome = "Ariel";
nome = "Äntonio";
nome = "Patrick"

console.log(nome);

const cargo = "Professor";
console.log(cargo);

// Exercicio 3

const meu_nome = "Jose"
let minha_idade = 69
let mensagem = `Meu Nome é ${meu_nome}, tenho ${minha_idade} anos.`;
console.log(mensagem);

let mensagem1 = "Meu nome e " + meu_nome + ", tenho " + minha_idade + "anos";
console.log(mensagem1);

// Tipos Primitivos
console.log(typeof meu_nome);
console.log(typeof minha_idade);

let maiorDeIdade = true;
let temfilhos = false;

let tamanho;
console.log(tamanho);

let vazio = null;
console.log(vazio);

// Exercicio 3 - Tipos primitivos

let a = 10;
let b = "Ariel";
let c = "10";
let d = 20;

console.log("a + b =", a + b);
console.log("a + c =", a + c);
console.log("a + d =", a + d);

let n1 = "42.5145";
n1=Number(n1);
console.log(n1);

console.log(Number(n1));

console.log(Number(n1) + 20);

console.log(parseInt(n1));
console.log(parseFloat(n1));
console.log(parseFloat("40.12AB"));
//console.log(Number(40.12AV))

// Condicionais

let idade2 = 18;

if (idade2 < 18) {
    console.log("Menor de Idade");
} 
    else if (idade2 === 18){
    console.log("Acabou de atingir a maioridade"); 
}
else {
    console.log("Maior de idade");
}



