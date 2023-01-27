const button = document.querySelector("button")
const txt = document.querySelector('.flex-container.txt')
const container = document.querySelector(".flex-container")
const body = document.querySelector("body")

let arr = [button, txt, container]
function mudaCor(){
  button.addEventListener('click', function(){
    body.classList.toggle('light')
    for(i in arr){
      arr[i].classList.toggle('light-others')
    }
  })
}

mudaCor()


//let arr = [button, txt, container, body]
/*
function mudColor(){
  button.addEventListener('click', function(){
    aplLigth(arr)
  })
}
const aplLigth = (arr) => {arr.map(pos => {pos.classList.toggle('ligth')})}
*/
//const aplDark = (arr) => {arr.map(pos => {pos.style.backgroundColor = 'red'})}




//aplDark(arr)
//aplicaDark(rr)
//mudaCor()












/*
function mudaCor(){
  button.addEventListener('click', function(){
    container.style.backgroundColor = 'blue'
    body.style.backgroundColor = 'blue'
    txt.style.backgroundColor = 'blue'
  })
}

function aplicaDark(arr){
  for( i in arr){
    arr[i].style.backgroundColor = "blue"
  }
}

function mudColor(){
  button.addEventListener('click', function(){
    aplDark(arr)
  })
}
*/