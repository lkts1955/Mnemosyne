
// function exercicioRep01() {

//     for (let i = 1; i <= 10; i++) {
 //       console.log(`Contagem: ${i}`);
//     }

//    let divDelogs = document.querySelector(".logs");

//    let paragrafo = document.createElement("p");
//    paragrafo.innerHTML = "Exercicio 01 de repeticao executado.";
//    divDelogs.appendChild(paragrafo);

    //console.log(divDelogs);

//}




/*


  // ======================================

//    let n = 1

//    while(n <= 10) {
//     console.log("Contador = ", n);
//     n++

//    }

//   // ==========================================

function exercicioRep02(){
    let mensagem = ""

       do {
        mensagem=prompt("Text Digitado: " + mensagem);
    
    
        }while (mensagem != "sair");
    
        console.log("Saiu!")


}

exercicioRep02()

//   
 
// // ================================================
// // exercicio da tabuada

function exercicioRep03() {
  let num = prompt("Insira um numero");

 for(let contador = 1; contador <= 10; contador++) {

     let valorCalculado = num * contador;
     let mensagem = `${num} x ${contador} = ${valorCalculado}`

     console.log(mensagem);

 }


}

exercicioRep03()
 

// =========================================

// Exercicio Soma dos numeros

function exercicioRep04(){
    let x = parseFloat(prompt("Insira um numero"));

    let soma = 0
    
     while(soma <= x){
       console.log("Numero: ", x + " Soma: ", soma + x);
       soma++
     }
  } 

 
exercicioRep04()


// ===================================================


// 1. **Exibir os números pares de 1 a 50:**
//     - Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

let par = 1;

while (par <= 50) {

    if(par% 2 === 0) {
        console.log (par);
    }
    par++
}
 

// =======================================================


// 2. **Jogo de adivinhação:**
//    - Gere um número aleatório de 1 a 100.
//    - Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
//    - Informe se o número inserido é maior ou menor que o correto.

let aletorio = parseInt(Math.random()*100);

let adivinhar = parseInt(prompt(('Digitar um numero de 1 a 100')));


if(adivinhar < 1 || adivinhar > 100){

    console.log("Digitou um numero invalido");    
}

else{
    if (aletorio === adivinhar) {

        console.log("Parabens você acertour o numero ... "+ aletorio);
        
    }
    else{
        console.log("Errouuuuuuu .....");
        console.log("Numero digitado : " + adivinhar);
        console.log("Numero aleatorio : " + aletorio)

    }
}



// =======================================================================================
// versão 2 melhorada

let aleatorio = parseInt(Math.random() * 100); 
let adivinhar = 0; 
let continuar = "S"


while (adivinhar !== aleatorio) { 
    adivinhar = parseInt(prompt('Digite um número de 1 a 100:')); 

    if (adivinhar < 1 || adivinhar > 100) {
        alert("Você digitou um número inválido. Tente novamente. " + adivinhar);
    } 
    
    else if (adivinhar < aleatorio) {
        alert("O número é maior. Tente novamente. " + aleatorio + " " + adivinhar);
    }   
    
    else if (adivinhar > aleatorio) {
        alert("O número é menor. Tente novamente. " + aleatorio + " " + adivinhar);
    } 
    
    else {
        alert("Parabéns! Você acertou o número: " + aleatorio + " " + adivinhar);
    }

   } 



// ===========================================================================================
// Versao do professor


let numeroAleatorio = Math.floor(Math.random() * 100);

let chute = null;

while (chute != numeroAleatorio) {

    chute = parseInt(prompt("Chute um número:"));

    if (chute != numeroAleatorio) {

        if (chute > numeroAleatorio) {
    
            alert("Chutou alto.");
    
        } else {
    
            alert("Chutou baixo.");
    
        }

    }

}

alert("Você acertou!");



// ==========================================================================================
 //   3. **Contagem regressiva:**
 //   - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.

 let contagem = parseInt(prompt("Digite um numero"))

 while (contagem >= 0) {
    console.log(contagem);
    contagem = contagem - 1
    
 }

 
// ================================================================================================
//
// **Soma dos dígitos de um número:**
//   - Peça ao usuário um número inteiro positivo.
//  - Use um `while` para somar seus dígitos.

let numero = prompt("Digite um numero inteiro");
let tamanho = numero.length;

for (let contador = 0; contador <= numero.length; contador++) {

    let digito = numero[contador];

}

numero[0]

numero[1]
*/















// ===============================================================================


/*

// 2. **Fatorial de um número:**
//    - Peça um número ao usuário.
//    - Use um `for` ou `while` para calcular o fatorial desse número.

// n!() = n1 * n2 * nn - so num positivo

let fatorial = parseInt(prompt("Digite um numero inteiro e positivo"));
let resultado = 1

if (fatorial < 0){

    console.log("Digite um numero inteiro e positivo");
}
    else{


    while(fatorial >= 1){

     resultado = resultado * fatorial

     fatorial = fatorial - 1

    }
console.log("Resultado : " + resultado);
}



//=====================================================================================

*/

// 4. **Números perfeitos de 1 a 1000:**
//  - Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
//   - Exemplo: `6` → `1 + 2 + 3 = 6`.
//   - Use um `for` aninhado para encontrar e exibir esses números até `1000`.









//====================================================================================

