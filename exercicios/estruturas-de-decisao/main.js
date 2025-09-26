
let numero = prompt('digite um numero');

if ( numero > 10 ) {
    console.log('O número é maior que 10');
} else {
    console.log('O numero não é maior que 10');
}


// conversão forçada de tipo
let x = prompt('Insira um numero');

if (x > 532 && x < 743 ) {
    console.log('O numero está entre 532 e 743');
} else {
    console.log('O numero não está entre 532 e 743');
}


let senha = prompt('Insira sua senha'); // sempre retorna uma string
let senhaArmazenada = '123456'; // camel-case
//let senha_armazenada = '123456'; // snake-case

if ( senha = senhaArmazenada ) {
    console.log('login efeuado com sucesso');
} else {
    console.log('Senha incorreta')
}


let idade = prompt('Insira a sua idade');

if ( idade >= 18 && renda >= 3036 ) {
    console.log('Está apto a realizar um consorcio');
} else {
    console.log('Infelismente não está apto');
}

if ( idade >= 18 ) {

    let idade = prompt('Insira  a sua renda (R$)');

    if ( renda >= 3036) {
        console.log('Está apto');
    } else {
        console.log('Voçê não tem renda');
    }

} else {
    console.log('Infelismente voçê não tem idade');
}


let experiência = prompt('Insira sua experiência como profissional');
let pontuação = 0;

if ( experiência < 5 ) {
    pontuação = pontuação + 10; // Expressão
} else if ( experiência >= 5 ) {
    pontuação = pontuação + 20;
}

let formação = prompt('Insiea  a sua  formção acadêmica');

if ( formação == 'graduação' ) {
    // pontuação = pontuação + 10;
    pontuação += 10;
} else if ( formação == 'especialização' ) {
    pontuação += 20;
} else if ( formação == 'mestrado' ) {
    pontuação += 30;
} else if ( formação == 'doutorado' ) {
    pontuação += 40;
}

console.log(' A sua pontuação final é: ${pontuação}');