// const ordenaPrimo = (arr) => {
//   const organiza = arr.sort(function(a,b){
//     return a - b
//   }).reverse().map(number => {
//     if(number % number+1 === 0){
//       console.log(number)
//       return true
//     }
//   })

//   console.log(organiza)
// }

// // console.log(ordenaPrimo([94, 2, 1, 3, 4, 10, 11, 51, 14, 65]))


// const ordPrimo = arr => {
//   const organiza = arr
//     .sort(function (a, b) {
//       return a - b
//     })
//     .reverse()

//   for (let i = 2; i < organiza; i++) {
//     if (organiza % i === 0) 
//     console.log(organiza[i])
//   }
//   console.log(organiza)
// }

// console.log(ordPrimo([94, 2, 1, 3, 4, 10, 11, 51, 14, 65]))
/*
const getBigPrime = (arr) => {
  const reversedArray = arr.sort(function(a,b){return a-b}).reverse()
  
  for(number of reversedArray){
   if(isPrime(number)){
       return `is the bigest prime ${number}`
    }
  }
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
  }
return true
}

console.log(getBigPrime([23,3,4,798,45,76,79,1,3,2]))
*/

function codigoBinario(codigo){
  separarCodigo = codigo.split('')

  vogais      = ['a','e','i','o','u']
  consoantes  = ['b','c','d','f','g','h','j','k','m','n','p','q','r','t','v','x','w','y','z']
  
  
  
  return console.log(separarCodigo)
}

console.log(codigoBinario('--..'))






/*



const array = arr => {
  const organiza = arr.sort(function(a,b){return a-b}.reverse()).map(()=>{
    const isPrime = (num) => {
      if(num % i === 0) return false
      console.log(isPrime)
    }
    return true
  })
  console.log(organiza)
}

console.log(array([23,3,4,798,45,76,79,1,3,2]))*/





//COdigo daora que tu fez para alterar as cores no modo dark




//TU pega o que precisa do html
const button = document.querySelector("button")
const txt = document.querySelector('.flex-container.txt')
const container = document.querySelector(".flex-container")
const body = document.querySelector("body")

//o array com os itens do html
let arr = [button, txt, container, body]

//função 1 - ela pega e muda individualmento os estilos
function mudaCor(){
  button.addEventListener('click', function(){
    container.style.backgroundColor = 'blue'
    body.style.backgroundColor = 'blue'
    txt.style.backgroundColor = 'blue'
  })
}

//função 2 - ela pega todos e muda o estilo da maneira "automatica"
function aplicaDark(arr){
  for( i in arr){
    arr[i].style.backgroundColor = "blue"
  }
}

//função 3 - usa o metodo map para pegar tudo e criar um novo arr sem alterar o original
function mudColor(){
  button.addEventListener('click', function(){
    aplDark(arr)
  })
}
const aplDark = (arr) => {arr.map(pos => {pos.style.backgroundColor = 'red'})}


//função 4 - muda apenas a classe ao inves de uma caracteristica especifica
function mudColor(){
  button.addEventListener('click', function(){
    aplBlue(arr)
  })
}
const aplBlue = (arr) => {arr.map(pos => {pos.classList.toggle('dark')})}







//aplDark(arr)
//aplicaDark(rr)
//mudaCor()
mudColor()