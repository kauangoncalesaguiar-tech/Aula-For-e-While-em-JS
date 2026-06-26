//FOI UTILIZADO AUXILIO DA IA NAS 3 ULTIMAS

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
/* const readline = require('readline-sync');
function PuxarSaldo() {
let saldo = 2000
console.log(`O saldo atual é de R$${saldo}`);
    do { 
let retirada = Number(readline.question('Digite a quantia que deseja retirar: '));
    if (retirada < saldo) {
    let saldoAtualizada = saldo -= retirada;
     console.log('Seu saldo agora é de', + saldoAtualizada);
     } else {
    console.log('Saldo insuficiente, escolha uma quantia menor: ');
    continue;
     }
    }
    while(true);
};
console.log(PuxarSaldo()); */





//Armazenamento de loja com While.. do
/* const readline = require('readline-sync'); 

let cadastrados = 0, totalEstoque = 0, maiorQtd = 0, maisPreenchido = "";

while (true) {
    let nome = readline.question("Produto (ou 'FIM' para sair): ");
   
    if (!nome || nome.toUpperCase() === "FIM") break;

    let qtd = +readline.question(`Quantidade de ${nome}: `);

    cadastrados++;
    totalEstoque += qtd;

    if (qtd > maiorQtd) {
        maiorQtd = qtd;
        maisPreenchido = nome;
    }
}

console.log(`\nProdutos cadastrados: ${cadastrados}`);
console.log(`Maior quantidade: ${maisPreenchido} (${maiorQtd} un)`);
console.log(`Total no estoque: ${totalEstoque}`); */





//Acertar senha 

/* const readline = require('readline-sync');

function VerifSenha() {
  const senhaCorreta = 1234;
  let tentativa = 0;
  let statusSenha = "F"

  do {
    tentativa = tentativa + 1;
    let n1 = Number(readline.question('Digite uma senha: '));

    if(n1 === senhaCorreta){
      console.log("Senha Correta!");
      statusSenha = "T";
    } 
    else{
      console.log('Senha incorreta, tente nomavente');
      statusSenha = "F";
    }

    if(tentativa >= 3){
      return 'Máximo de tentativas atingido';
    }

  }while(statusSenha === "F");

  return "Verificado senha!"
};

console.log(VerifSenha()); */






//Do.. While para cadastra produto
/* 
const readline = require('readline-sync');

function cadastrarProdutos() {
    const produtos = [];
    let continuar = "S";

    do {
        let nome = readline.question('Digite o nome do produto: ');
        let preco = Number(readline.question(`Digite o preco de ${nome}: `));

    
      if (!isNaN(preco) && preco >= 0) {
            produtos.push({ nome: nome, preco: preco });
      } else {
            console.log('Preco invalido! Produto nao cadastrado.');
      }

      continuar = readline.question('Deseja cadastrar outro produto? (S/N): ').toUpperCase();
      console.log('');

    } while (continuar === "S");

  
    if (produtos.length > 0) {
        let total = 0;
        let maisCaro = produtos[0];
        let maisBarato = produtos[0];

        
        for (let i = 0; i < produtos.length; i++) {
            total += produtos[i].preco;

            if (produtos[i].preco > maisCaro.preco) maisCaro = produtos[i];
            if (produtos[i].preco < maisBarato.preco) maisBarato = produtos[i];
        }

        let media = total / produtos.length;

        console.log(`Quantidade de produtos: ${produtos.length}`);
        console.log(`Valor medio: R$ ${media.toFixed(2)}`);
        console.log(`Mais caro: ${maisCaro.nome} (R$ ${maisCaro.preco.toFixed(2)})`);
        console.log(`Mais barato: ${maisBarato.nome} (R$ ${maisBarato.preco.toFixed(2)})`);
    } else {
        console.log('Nenhum produto cadastrado.');
    }
  return " "
}

console.log(cadastrarProdutos()); */





//Do.. While para marcar tempo de voltas
/* const readline = require('readline-sync');

function registrarVoltas() {
    const voltas = [];
    let continuar = "S";

    
    do {
        let tempo = Number(readline.question('Digite o tempo da volta (em segundos): '));

        
        if (!isNaN(tempo) && tempo > 0) {
            voltas.push(tempo);
        } else {
            console.log('Tempo invalido! Volta nao registrada.');
        }

        continuar = readline.question('Registrar outra volta? (S/N): ').toUpperCase();
        console.log(''); 

    } while (continuar === "S");

    
    if (voltas.length > 0) {
        let totalTempo = 0;
        let melhorTempo = voltas[0]; 
        let piorTempo = voltas[0];   

        
        for (let i = 0; i < voltas.length; i++) {
            totalTempo += voltas[i];

            if (voltas[i] < melhorTempo) melhorTempo = voltas[i];
            if (voltas[i] > piorTempo) piorTempo = voltas[i];
        }

        let media = totalTempo / voltas.length;

        
        console.log(`Numero total de voltas: ${voltas.length}`);
        console.log(`Melhor tempo: ${melhorTempo} segundos`);
        console.log(`Pior tempo: ${piorTempo} segundos`);
        console.log(`Tempo medio das voltas: ${media.toFixed(2)} segundos`);
    } else {
        console.log('Nenhuma volta foi registrada.');
    }

    return " "
}

console.log(registrarVoltas()); */

/*  Código nosso que estás em C
  Santificado seja vós, Console
  Venha a nós o vosso array[10]
  E seja feita, sim, {vossa chave}
  Assim no if{} como no else{}
  O for (nosso; de cada dia; nos dai hoje++)
  Debugai as nossas sentenças
  Assim como nós colocamos o ponto e vígula esquecido;
          E não nos deixeis errar identação
  Mas livrai-nos das funções recursivas
  A main()
""") */