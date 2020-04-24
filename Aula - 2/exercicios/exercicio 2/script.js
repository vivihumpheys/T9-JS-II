/*
  Exercício 2
  -----------

  Instruções:

  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. selecione os spans do html e substitua cada com informações suas.

  3. crie um arquivo css com a classe "list-item" - que tenha a propriedade color como red.

  4. Percorra por cada li presente na ul e adicione em sua classList a classe "list-item". 

  5. Crie um elemento img e coloque no atributo src uma foto sua. Não se esqueça de adicionar o novo elemento na página.
  
*/


const body = document.querySelector('body')
body.classList.add ('body')

const nickname = document.querySelector ('#nickname')
const favoritos = document.querySelector ('#favoritos')
const cidade = document.querySelector('#cidade')

nickname.innerText = 'vivi, vi, aney, fianey'
favoritos.innerText = 'comer, ver filmes, dormir, dançar, cozinhar, cachoeira'
cidade.innerText = 'RIO DE JANEURA'

const item = document.querySelectorAll('li')


const lista = [item]

for (i=0; i<lista.length; i++) {
  item.classList.add('lista-item')
}

const container = document.querySelector ('#container-foto')
const minhaFoto = document.createElement ('img')
minhaFoto.src = ""
container.appendChild = minhaFoto