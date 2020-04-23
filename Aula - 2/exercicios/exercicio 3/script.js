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

// const arrayLivros = [
//   {
//     titulo: "Doze contos peregrinos",
//     autor: 'Gabriel García Marquez',
//     capa: "http://imagens.lelivros.love/2016/09/Baixar-Livro-Doze-Contos-Peregrinos-Gabriel-Garc%C3%ADa-M%C3%A1rquez-em-PDF-ePub-e-Mobi-ou-ler-online-370x574.jpg"
//   },
//   {
//     titulo: "Amor nos tempos do cólera",
//     autor: 'Gabriel García Marquez',
//     capa: "https://http2.mlstatic.com/livro-o-amor-nos-tempos-do-colera-D_NQ_NP_861515-MLB26557863387_122017-O.webp"
//   },
//   {
//     titulo: "Cem anos de solidão",
//     autor: 'Gabriel García Marquez',
//     capa: "https://http2.mlstatic.com/livro-cem-anos-de-solido-gabriel-garcia-marquez-1-edico-D_NQ_NP_641669-MLB31012879859_062019-F.jpg"
//   }

// ]
// //acessando o body do html com query selector
// const body = document.querySelector('body')

// for (i = 0; i < arrayLivros.length; i++) {
//   //criar uma div dentro do body
//   const livroContainer = document.createElement('div')
  
//   //criando titulo, paragrafo pro autor e capa, e add seu conteudo
//   const tituloLivro = document.createElement('h2')
//   tituloLivro.innerText = `Titulo: ${arrayLivros[i].titulo}`

//   const paragrafoAutor = document.createElement('p')
//   paragrafoAutor.innerText = `Autor: ${arrayLivros[i].autor}`

//   const imagemCapa = document.createElement ('img')
//   imagemCapa.classList.add('capas')
//   imagemCapa.src = arrayLivros[i].capa



//   //inserindo a div dentro do body
//   body.appendChild(livroContainer)

//   //inserindo o h2 e paragrafo autor dentro da div
//   livroContainer.appendChild (tituloLivro)
//   livroContainer.appendChild (paragrafoAutor)
//   livroContainer.appendChild (imagemCapa)

//   console.log (livroContainer)

// }

function removerElemento(){
const h3 = document.querySelector('h3')
const body = document.querySelector('body')

body.removeChild(h3)
}