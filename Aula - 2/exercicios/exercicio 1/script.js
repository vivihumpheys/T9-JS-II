/*
  Exercício 1
  -----------

  A função insertion cria elementos no DOM e para isso recebe três argumentos, o elemento, o ID de um elemento
  já existente no seu HTML e o texto que será inserido no elemento criado. 
  
  
*/


function insereElementoTexto(elemento, id, texto) {
  const elementoNovo = document.createElement(elemento)
  elementoNovo.innerText = texto
  const elementoExistente = document.querySelector(id)
  elementoExistente.appendChild(elementoNovo)

}

//a função de criar um parágrafo dentro do elemento com ID "conteudo" e com o texto "Fui criado com Javascript"
insereElementoTexto('p', "#container", "Fui criado com Javascript")

insereElementoTexto('h1', '#outradiv', "Outro textinho bolado criado pela func")

insereElementoTexto('strong', '#maisoutradiv', ' ele tá fortinho ele')
