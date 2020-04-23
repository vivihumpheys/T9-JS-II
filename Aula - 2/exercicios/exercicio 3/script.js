/*
  Exercício 3
  -----------

  Instruções:

  1. crie uma página com um h1 de "Minha lista de Livros"

  2. crie um array com objetos contendo informações dos livros que você mais gosta.
  
  ex.: {
    title: "Harry Potter e a Pedra Filosofal",
    author: "J. K. Rowling",
  }

  4. percorra pelo array de livros e, para cada livro, crie uma div com o título e autor do livro e 
  adicione ele na página.

  Bonus: adicione uma propriedade com a URL da imagem da capa do livro e crie também um img para cada livro

*/

const arrayLivros = [
  {
    titulo: "Doze contos peregrinos",
    autor: 'Gabriel García Marquez'
  },
  {
    titulo: "Amor em tempos de cólera",
    autor: 'Gabriel García Marquez'
  },
  {
    titulo: "Cem anos de solidão",
    autor: 'Gabriel García Marquez'
  }

]
//acessando o body do html com query selector
const body = document.querySelector('body')

for (i = 0; i < arrayLivros.length; i++) {
  //criar uma div dentro do body
  const livroContainer = document.createElement('div')
  
  //criando titulo e paragrafo pro autor e add seu conteudo
  const tituloLivro = document.createElement('h2')
  tituloLivro.innerText = `Titulo: ${arrayLivros[i].titulo}`

  const paragrafoAutor = document.createElement('p')
  paragrafoAutor.innerText = `Autor: ${arrayLivros[i].autor}`


  //inserindo a div dentro do body
  body.appendChild(livroContainer)

  //inserindo o h2 e paragrafo autor dentro da div
  livroContainer.appendChild (tituloLivro)
  livroContainer.appendChild (paragrafoAutor)

  console.log (livroContainer)

}

