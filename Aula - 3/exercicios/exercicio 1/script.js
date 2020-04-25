/*
  Exercício 1
  -----------

  Faça o gato falar!

  1. acessar e guardar o elemento que contém a imagem do gato
  2. criar uma função que execute uma lógica para alterar o texto da div "cat-chat"
  3. adicionar um observador de eventos na imagem do gato que faça com que ao clicar na imagem
  o texto da div "cat-chat" seja alterado.

    
*/

//seu código vai aqui

//selecionando a imagem do gato no html
const gato = document.querySelector ('#cat-pic')

//declarar function que vai alterar o conteúdo textual da div que possui o id cat-chat

function falaGato (){
  //selecionando a div cat-chat
  const miau = document.querySelector ('#cat-chat')

  //alterando o conteudo da div miau
  miau.innerText = 'coée seus comunistinha de merda'
}

gato.addEventListener ('click', falaGato)