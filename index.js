//Notas
const notas = [7, 8, 9, 10, 2, 6, 9, 3, 8, 9];
//Media da sala inteira
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];};

let media = soma / notas.length;
//console.log(media);

//Maior numero
let MaiorNumero = Math.max(...notas);
//console.log(MaiorNumero);

//Menor numero
let MenorNumero = Math.min(...notas);
//console.log(MenorNumero)

let notaSete = notas.filter(notas => notas >= 7);
//console.log(notaSete);
 
