// Exercício 1 - Variavel de Acesso

let nivelAcesso = 2;

if (nivelAcesso === 3) {
  console.log("Acesso Total");
} else if (nivelAcesso === 2) {
  console.log("Acesso Parcial");
} else {
  console.log("Acesso Negado");
}

// Exercício 2 - Avaliação de Notas

let nota = 7;
switch (nota) {
  case 10:
    console.log("Nota Máxima");
    break;
  case 9:
  case 8:
    console.log("Muito Bom");
    break;
  case 7:
  case 6:
    console.log("Bom");
    break;
  case 5:
    console.log("Regular");
    break;
  default:
    console.log("Nota insuficiente");
    break;
}

// Exercício 3 - Listando Números Pares

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log ("Par:", i)
    }
}

// Exercício 4 - Soma com while

let soma = 0;
let contador = 1;
while (contador <= 5) {
  soma += contador;
  contador++;
}
console.log("Soma total:", soma); 