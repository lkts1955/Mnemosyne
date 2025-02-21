
// exercicio 1

        //triangulo

    let ta = parseFloat(prompt("Entre com um numero para lado A"));
    let tb = parseFloat(prompt("Entre com um numero para lado B"));
    let tc = parseFloat(prompt("Entre com um numero para lado C"));


        if (ta + tb > tc && ta + tc > tb && tb + tc > ta) {
            // Classificao do triângulo
            if (ta === tb && tb === tc) {
                console.log("Triângulo Equilátero");
            } else if (ta === tb || ta === tc || tb === tc) {
                console.log("Triângulo Isósceles");
            } else {
                console.log("Triângulo Escaleno");
            }
        } 
        else {
            console.log("Os lados não formam um triângulo");
        }
    
    


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


// versa0 2 

let num1 = parseFloat(prompt("Insira o primeiro número:"));
let num2 = parseFloat(prompt("Insira outro número:"));
let operacao = prompt("Insira a operação. Ex: +, -, *, /.");

let resultado = null;

switch (operacao) {
  case "+":

    resultado = num1 + num2;

    break;

  case "-":

    resultado = num1 - num2;

    break;

  case "*":

    resultado = num1 * num2;

    break;

  case "/":

    if (num2 == 0) {
        console.log("Você não pode dividir um número por zero.");
    } else {
        resultado = num1 / num2;
        console.log("resultado", resultado);
    }

    break;

  default:

    console.log("Operador inválido.");

    break;
}

if (operacao != "/") {

    console.log("resultado", resultado);

}



// Exercicio 2

let qualmaior1 = prompt("Digite um Numero");
let qualmaior2 = prompt("Digite o segundo numero");
let qualmaior3 = prompt("Digite o terceiro numero");

console.log("Numeros digitados: " + qualmaior1 + ", " + qualmaior2 + ", " + qualmaior3)

if(qualmaior1 > qualmaior2 && qualmaior1 > qualmaior3){

    console.log("O numero maior é: " + qualmaior1);
}
else if(qualmaior2 > qualmaior1 && qualmaior2 > qualmaior3){
    console.log("Onumero maior é:" + qualmaior2)
}
else if(qualmaior3 > qualmaior1 && qualmaior3 > qualmaior2){
    console.log("O numero maior e: "+ qualmaior3) 
}


// Exercicio 3


let usuario = prompt("Digite o usuario");
let senha = prompt("Digite a sua senha");


if(usuario == "admin"){
    if(senha == "1234"){
        console.log("Acesso liberado")
        alert("Acesso liberado");
    } 
    else {
        console.log("Acesso Negado")
        alert("Acesso Negado");
       
    }
      
}

//Nivel Avancado

// exercicio 1

        //triangulo

        let ta = parseFloat(prompt("Entre com um numero para lado A"));
        let tb = parseFloat(prompt("Entre com um numero para lado B"));
        let tc = parseFloat(prompt("Entre com um numero para lado C"));
    
    
            if (ta + tb > tc && ta + tc > tb && tb + tc > ta) {
                // Classificao do triângulo
                if (ta === tb && tb === tc) {
                    console.log("Triângulo Equilátero");
                } else if (ta === tb || ta === tc || tb === tc) {
                    console.log("Triângulo Isósceles");
                } else {
                    console.log("Triângulo Escaleno");
                }
            } 
            else {
                console.log("Os lados não formam um triângulo");
            }

//Exercio 2


let notax = prompt("Insira uma nota (0-100)");

if (notax >= 90 && notax <= 100) {
    console.log("Conceito A " + notax);
    alert("Conceito A " + notax);
} 
else if (notax >= 80 && notax <= 89) {
    console.log("Conceito B " + notax);
    alert("Conceito B " + notax);
}
 else if (notax >= 70 && notax <= 79) {
    console.log("Conceito C " + notax);
    alert("Conceito C " + notax);
} 
else if (notax >= 60 && notax <= 69) {
    console.log("Conceito D " + notax);
    alert("Conceito D " + notax);
} 
else {
    console.log("Conceito F " + notax);
    alert("Conceito F " + notax);
}



// Calculo de IMC

let peso = prompt("Entre com seu peso")
let altura = prompt("Entre com a sua altura")


// Ano Bissexto - exercico 4 

let ano = parseint(Insira o ano){

if(ano % 4 == 0)
    console.log(E bissexto);
}

else{

if(ano % 400 == 0)
    console.log("E bissexto");

}

else{
console.log("Nao e bissexto");


}

