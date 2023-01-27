let bg = document.querySelector(".flex-container")
let button = document.querySelector(".btn")
let items = document.querySelector(".list-items")
let texto = document.querySelector(".texto")
let span = document.querySelector("span")
let title = document.querySelector(".title")
let bgtitle = document.querySelector("h1")


function mudaCor(){
  button.addEventListener('click', function(){
   
      bg.style.backgroundColor = 'Gainsboro'
      button.style.backgroundColor = 'Gainsboro'
      items.style.backgroundColor = 'Gainsboro'
      texto.style.backgroundColor = 'Gainsboro'
      bgtitle.setAttribute("style", "background-color: Gainsboro; color: rgb(90, 89, 89);")
      span.setAttribute("style", "background-color: Gainsboro; color: Silver")
    
  })
}

/* 
AJEITAR O FLEX CONTAINER E TENTAR MUDAR OQ TA DANDO ERRADO
POR ALGUM MOTIVO OS LINKS NÃO ESTÃO MUDANDO AINDA TEM CAMINHO PRA DESCOBRIR
CONSERTAR A LOGICA DE COMO MUDA A COR, TENTAR FAZER ALGO MELHOR
*/



//button.style.backgroundColor = 'red'


mudaCor()
