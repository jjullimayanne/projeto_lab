let qualOSeuNome = prompt("Qual o seu nome?")

alert(`Bem vindo(a) ${qualOSeuNome} `)


const question = prompt("Você quer continuar? \n  (a) sim \n (b) não ");
    if (question == "a") {
        alert("Okay, questão 1...");
         
    } else {
        alert("Obrigada por visitar!");
        
    }

const erradas = document.getElementById('erradas');
const certas = document.getElementById('certas');

let questionUm = prompt("Quanto é 2+2? \n (a) 4 \n (b) 5 " );
    if (questionUm == "a") {
  
        certas.innerHTML = 'Questão 1';
        
        
    } else {

        erradas.innerHTML = 'Questão';
       
        
    }
    

let questionDois = prompt("Qual a raiz quadrada de 16? \n (a) 4 \n (b) 2 ");
    if (questionDois == "a") {
        
        certas.innerHTML = 'Questão 2';

    } else {
        erradas.innerHTML = 'Questão 2';
        
    }


let questionTres = prompt("Qual o dobro de 5? \n (a) 8 (b) 10" );
    if (questionTres == "b") {
        certas.innerHTML = 'Questão 3';
       
}
     else {
        erradas.innerHTML = 'Questão 3';
        
  
    }