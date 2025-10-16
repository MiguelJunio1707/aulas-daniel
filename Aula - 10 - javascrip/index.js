// console.log('Miguel júnio Dias Bernardo');
// console.log(12364837092657);

// tipos de variaveis

// var nome = 'miguel'; esta em desuso
// let nome = 'miguel';
// const nome1 = 'nathália';
// nome1= 'daniel';
// console.log(nome1);

// let nome = 'João';
// let nome1 = 'Maria';
// let nome3 = 'Eduardo';
// let data1 = 1984;
// let data2 = 2000;
// let data3 = 2012;
// let data4 = 2015;

// console.log(nome, 'nasceu em', data1);
// console.log('em', data2, nome, 'conheceu', nome1);
// console.log(nome, 'casou-se com', nome1, 'em', data3);
// console.log(nome1, 'teve 1 filho com', nome, 'em', data4);
// console.log('O filho de', nome, 'se chama', nome3);

// tipos de dados
// string - é o conjunto de caracteres que formam palavras e textos
// number - são números que podem ser inteiros e fracionarios.
// ex: 1.40;
// bigint - são números que representam uma grande quantidade
// NULL - são variaveis declaradas que não possuem valores
// undefined - são variáveis que não possuem um tipo de dado definido

// const Nome = "Miguel";
// const sobrenome = "Júnio"
// let idade = 20;
// let peso = 70;
// const altura = 1.80;
// let imc; //peso / (altura * altura)
// let anoNascimento;

// imc = peso / (altura * altura);
// console.log(imc);
// anoNascimento = 2025 - idade;
// console.log(anoNascimento);

// console.log(`${Nome} ${sobrenome} tem ${idade} anos.`);
// console.log(`pesa ${peso}kg, tem ${altura} de altura e seu imc é de ${imc}`);
// console.log(`${Nome} ${sobrenome} nasceu em ${anoNascimento}`);

// var nome = "Miguel";
// var idade= "20";
// var curso= "TI";

// document.write(`o aluno ${nome}, tem ${idade} anos e cursa a disciplina ${curso}.`)

// Operadores
// + -> soma
// - -> subtração
// * -> multiplicação
// / -> divisão

// var valor1 = 9;
// var valor2 = 8;

// var soma = valor1 + valor2;
// var subtração = valor1 - valor2;
// var multiplicação = valor1 * valor2;
// var divisão = valor1 / valor2;

// document.write(`O resultado da soma é: ${soma} <br>`);
// document.write(`O resultado da subtração é: ${subtração} <br>`);
// document.write(`O resultado da multiplicação é: ${multiplicação} <br>`);
// document.write(`O resultado da divisão é: ${divisão} <br>`);

// operadores de comparação 
//  == -> igual a 
//  != -> diferente de 
//  < -> menor que
//  > -> maior que
//  <= -> menor ou igual a
// >= -> maior ou igual a 

// var valor1 = "10";
// var valor2 = "20";

// document.write(`<h1> funções javascript </h1>`);

// if(valor1 != valor2){
//     document.write(`o valor ${valor1} é igual a o ${valor2}<br>`);
// }
// else{
//     document.write(`o ${valor1} é diferente do ${valor2}`);
// }

// funções
// function saudacao(nome){
//     // document.write(`Hello World ${nome}`);
//     return `Bom dia ${nome}`
// }
// const mensagem = saudacao('Miguel');
// document.write(mensagem);

// function soma(x, y){
//     const resultado = x + y;
//     return resultado;
// }
// function subtração(x, y){
//     const resultado = x - y;
//     return resultado;
// }
// function divisão(x, y){
//     const resultado = x / y;
//     return resultado;
// }
// function multiplicação(x, y){
//     const resultado = x * y;
//     return resultado;
// }
// console.log(soma(5, 4));
// console.log(subtração(5, 4));
// console.log(divisão(5, 4));
// console.log(multiplicação(5, 4));

// var nota = 5;

// if(nota >= 6){
//     document.write(`A nota ${nota} <hr>Está aprovado!!`);
// }
// else if ((nota < 6) && (nota >= 4)){
//     document.write(`A nota ${nota} <hr>Foi aprovada por pouco!!`)
// }
// else{
//     document.write(`A nota ${nota} <hr>Não foi aprovada!!`)
// }

// var chuva = false;
// var sol = true;

// if(sol){
//     document.write('vamos a praia');
// }
// else if (chuva){
//     document.write('não vamos');
// }

// switch key

// var key = 5;

// switch (key) {
//     case 1:
//         document.write(`A chave ${key} é da casa.`);        
//         break;
//     case 2: 
//         document.write(`A chave ${key} é do apartamento`);
//         break;
//     case 3:
//         document.write(`A chave ${key} é do carro`);
//         break;
//     case 4:
//         document.write(`A chave ${key} é da moto`);
//         break
//     case 5:
//         document.write(`A chave ${key} é do barco`)
//         break
//     default:
//         document.write(`A chave não corresponde`);
//         break;
// }

// var cadeira = {
//     cor: "preta",
//     altura: 118,
//     largura: 74,
//     profundidade: 64,
//     peso: 17
// };

// document.write(`A cor da cadeira é: ${cadeira.cor}.<hr>`);
// document.write(`A cor da cadeira é: ${cadeira.altura}cm.<hr>`);
// document.write(`A cor da cadeira é: ${cadeira.largura}cm.<hr>`);
// document.write(`A cor da cadeira é: ${cadeira.profundidade}cm.<hr>`);
// document.write(`A cor da cadeira é: ${cadeira.peso}Kg.<hr>`);

// var mesa = new Object();
// mesa.cor = "Preta";

// document.write(`A cor da mesa é: ${mesa.cor}.<hr>`);

// arrays

var frutas = ["abacate","Maça", "Melancia", "Banana","Manga","Abacaxi","Uva"];

// Contar a quantidade de itens do array

document.write(`Quantidade de frutas: ${frutas.length}<hr>`);

// Acessar a primeira item do meu array

document.write(`A primeira fruta é: ${frutas[3]}<hr>`);

// Acessar o último item da lista 

document.write(`O último item da lista é: ${frutas[frutas.length-1]}<hr>`);

// Ler um array completo
frutas.forEach(function(item, indice, array){
    document.write(item, indice, );
})