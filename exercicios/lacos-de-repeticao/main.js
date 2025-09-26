// exercicio 1
/*let i = 1;
while (i <= 2025) {
    console.log (i);
    i++;
}
*/

//exercicio 2
/*let numero = 90;
while (numero >= 77) {
    console.log(numero);
    numero--;
}
*/



// ex 
/*let nome;
do {
    nome = prompt('qual o seu nome ?');
 } while (!nome);
console.log('ola' + nome );  
*/

// DO...WHILE
/*1-Escreva um programa que solicite 1 ou 0. Caso o usuário insira um número diferente, o programa deverá solicitar novamente uma entrada
do usuário;
let numero;
do {
    numero = prompt ('digite o numero');
} while (numero != 1 && numero != 0);
*/

/*2-Defina uma variável com uma "senha".Faça um laço de repetição que solicite a senha até que o usuário insira a senha correta (utilize
prompt para capturar a entrada do usuário);
let senhaCorreta = '123456';
let senha;
do {
    senha = prompt('digite a senha:');
} while (senha != senhaCorreta);
*/

//3-Escreva um programa que solicite 5 números ao usuário e exiba ao final apenas o maior deles;
/*let numero;
let numeroMaior = 0;
let contador = 0;

do {
    numero = prompt('digite um numero:');
    numero = Number(numero);
    contador = contador + 1;
    if (numero > numeroMaior) {
        numeroMaior = numero;
    }
    
} while(contador <= 4);
console.log(numeroMaior);
*/

// FOR
/*1-Escreva um programa, utilizando for, que exiba os números de 0 a 100;
for (let contador = 0; contador < 100; contador = contador + 1) {
    console.log(contador)
}
*/


2-Escreva um programa em que o usuário insira o peso de 10 pessoas e calcule a média aritmética do peso delas;
