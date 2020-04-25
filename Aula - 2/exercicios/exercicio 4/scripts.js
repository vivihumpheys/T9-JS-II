/*
  Exercício 4
  -----------

    Instruções:

    1. Crie um array com o nome de todas as alunas da turma
    2. selecione o elemento "lista-alunas"
    3. crie uma função com a lógica que cria elementos "li" com o nome de cada aluna, e adicione na lista de alunas.
    

*/

window.addEventListener ('DOMContentLoaded', function (){
  const alunas = ['Maria', 'Liana', 'Viviane', 'Gabi', 'Natalia', 'Débora', 'Nayla', 'Raquel']
  const listaAlunas = document.querySelector ('#lista-alunas')
  
  for (i=0; i<alunas.length; i++ ) {
    let item = document.createElement ('li')
    item.innerText = alunas[i]
    listaAlunas.appendChild(item)

  }


})
