/*
  Exercício 1
  -----------

  Liga e desliga

  1. selecione a imagem do documento.
  2. selecione o body do documento. 
  3. crie a função "changeBg", essa função deve alterar o background do body quando o usuário clicar na imagem.

    
*/

const img = document.querySelector('img');
const bg = document.querySelector ('body');
const h1 = document.querySelector('h1')


function changeBg () {
if (bg.style.backgroundColor == 'purple' && h1.innerText == 'DESLIGADO'){
  bg.style.backgroundColor = 'aqua';
  h1.innerText = 'LIGADO'
} else {
  bg.style.backgroundColor = 'purple';
  h1.innerText = 'DESLIGADO'
}
}