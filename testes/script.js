//Obter os itens do html
const button = document.querySelector("button")
const txt = document.querySelector('.flex-container.txt')
const container = document.querySelector(".flex-container")
const body = document.querySelector("body")

//Array com os itens
let arr = [button, txt, container]

//Função para mudar entre modo dark e light
function mudaCor(){
  button.addEventListener('click', function(){
    body.classList.toggle('light')
    for(i in arr){
      arr[i].classList.toggle('light-others')
    }
  })
}

//Chama a função
mudaCor()