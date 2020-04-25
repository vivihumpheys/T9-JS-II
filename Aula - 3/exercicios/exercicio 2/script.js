/*
  Exercício 2
  -----------

  Adicionar tarefas

  1. selecione o input e o botão da página.
  2. crie uma função "addTask" que adicione os valores inseridos no input dentro de uma div na página.
  3. adicione um observador de "click" no botão para executar a função addTask.

*/

//seu código vai aqui

//essa função vai incluir todo o codigo para que ele rode com menos falhas, e o script possa ir no head
window.addEventListener('DOMContentLoaded', function () {
  //selecionando o imput
  const input = document.querySelector('#input')

  //selecionar o button
  const botao = document.querySelector('#add')

  // botao.addEventListener ('click', function () {

  // })

  //selecionando a div de tarefas
  const listaTarefas = document.querySelector('#lista')

  //declarando a function addTask
  function addTask() {
    //criou um elemento item
    const tarefa = document.createElement('li')
    //adicionou o conteudo do input ao item
    tarefa.innerText = input.value
    //adicionou o item à div listaTarefas
    listaTarefas.appendChild(tarefa)
  }
  
  //adicionar o evento no botão para executar a função
  botao.addEventListener('click', addTask)
})