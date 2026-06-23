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
 
//For com Carros

//Total vendido ano
const TotalVendaCarros = [150000, 231000, 530000, 200000, 170000, 600000, 341000, 121000, 830000, 741000, 300000, 255000]
let Carrossoma = 0;
for (let i = 0; i < TotalVendaCarros.length; i++) {
    Carrossoma += TotalVendaCarros[i];};

//console.log('Valor final do ano: ', Carrossoma)


//Media do Mensal
let Carrossoma2 = 0;
for (let i = 0; i < TotalVendaCarros.length; i++) {
    Carrossoma2 += TotalVendaCarros[i];};

let Carrosmedia = Carrossoma2 / TotalVendaCarros.length;

//console.log(Carrosmedia);

//Maior Venda
let MaiorVenda = Math.max(...TotalVendaCarros);
//console.log(MaiorVenda);

//Menor Venda
let menorVenda = Math.min(...TotalVendaCarros);
//console.log(menorVenda);

//Conversão de temperatura
//let inicio = Number(prompt('Valor inicial'));
//let final = Number(prompt('Valor final'));
//for(c = inicio)
//console.log

//Saldo
let saldo = 2000
console.log(`O saldo atual é de R$${saldo}`);
do { 
let retirada = Number(prompt.question('Digite a quantia que dedseja retirar'));
    if (retirada < saldo) {
    let saldoAtualizada = saldo -= retirada;
     return 
} 
};




console.log();
//Abobora








//Acertar senha 

const readline = require('readline-sync');
function VerifSenha() {
    let n1 = Number(readline.question('Digite uma senha: '));
    const senhaCorreta = 1234;
    let tentativa = 0;
    do {
        
        if (n1 === senhaCorreta) {
            return ('Senha correta');
        }   
        else if (senhaCorreta % n1);
         {
            return ('Senha incorreta, tente nomavente'); tentativa++
        }
        if (tentativa >= 3) {
            return('Máximo de tentativas atingido');
            break
        }
    }   while(tentativa >= 3);
};
console.log(VerifSenha());