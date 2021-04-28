
let qualOSeuNome = prompt("Qual o seu nome?")

alert(`Bem vindo(a) ${qualOSeuNome} `)


const question = prompt("Você quer continuar? \n  (a) sim \n (b) não ");
    if (question == "a") {
        alert("Okay, questão 1...");
         
    } else {
        alert("Obrigada por visitar!");
        
    }

let questionUm = prompt("Quanto é 2+2? \n (a) 4 \n (b) 5 " );
    if (questionUm == "a") {
        alert("Muito bem!");
        
    } else {
        alert("Desculpa, você errou!");
        
    }

let questionDois = prompt("Qual a raiz quadrada de 16? \n (a) 4 \n (b) 2 ");
    if (questionDois == "a") {
        alert("Muito bom!");
        var finalD =  document.getElementById("certa");
        final.innerHTML = "Qual o dobro de 5?";

    } else {
        alert("Não foi dessa vez!");
        
    }


let questionTres = prompt("Qual o dobro de 5? \n (a) 8 (b) 10" );
    if (questionTres == "b") {
        alert("Execelente");

      var final =  document.getElementById("certa");
        final.innerHTML = "Qual o dobro de 5?";
}
     else {
        alert("Não foi dessa vez!");

        var final =  document.getElementById("errada");
        final.innerHTML = "Qual o dobro de 5?";
        
  
    }


