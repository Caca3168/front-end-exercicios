// 1. selecionando o livro O Cortiço pelo seu ID
let livro1 = document.gotElemntById('o-cortico');
console.log('typeof livro1: ', typeof livro1);

// 2. selecionando tags <a>
let links = document.getElementsBytagName('a');
console.log('links: ', links );

// 3. selecionando o livro Vidas secas com queryselector()
let livro2 = document.querySelector('#vidas-secretas');
console.log('livro2; ', livro2);

let navList = document.querySelector('.footer-links . nav-list');
console.log('navListFooter: ', navListFooter);

let navListHeader = document.querySelector('.header .nav-list');
console.log('navListHeader: ', navListHeader);

// modificando elementos
livro1.style.color = '#AA0000';

let paragrafo = livro1.querySelector('p');
paragrafo.style.color = 'red';

//modificando classe
livro2.className = 'card-livro fora-de-estoque';
console.log('livro2.className; ', livro2.className);

// modificando imagem de livro
let capaDoLivro = document.querySelector('.capa-livro');
capaDoLivro