// exercicio 1

let num = prompt("Digite um numero");


if (isNaN(Number(num))){
    console.log("ERRO ... Não é numero!!!")
}

else if(num > 0){
    console.log("positivo");
}
else if(num < 0) {
    console.log("Negativo");
}
else if(num == 0) {
    console.log ("É zero");
}




// Exercico 2

let num1 = prompt("Digite um numero");

if(num1 % 2 == 0) {
    console.log("É par")
}

else {
    console.log("É impar")
    
}


// Exercicio 3

let idade = prompt("Digite a sua idade.");

if(idade > 0 && idade <= 12){
    console.log("Ainda é uma crianca!!!!");
}
else if(idade >= 13 && idade <= 17){
    console.log("Já é um adoleceste");
}

else{

    console.log("Ja e Adulto");
}


// exercicio 4

let nota = prompt("Digite a nota do aluno");

if(nota >= 60) {
    console.log("Aluno Aprovado");

}

else{
    console.log("Aluno Reprovado");
}
    

// Nivel Intermediario


// Exercico 1

let numx1 = prompt("Numero 1 - Digite o primeiro numero");
let numx2 = prompt("Numero 2 - Digite o segundo Numero");
let numx3 = prompt("operador");
let resultado = 0
switch (numx3) {
    case '+':
    
    console.log("Operacao: Soma");
        resultado = parseFloat(numx1) + parseFloat(numx2)
        console.log(resultado)  

        break;

    case '-':
        console.log("Operacao: Subtracao");
        resultado = parseFloat(numx1) - parseFloat(numx2)
        console.log(resultado)  


        break;

    case '*':
        console.log("Operacao: Multiplicacao");
        resultado = parseFloat(numx1) * parseFloat(numx2)
        console.log(resultado)  


        break;

    default:
        break;
}


// Exercicio 2

let qualmaior1 = prompt("Digite um Numero")
