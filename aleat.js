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

console.log(array([23,3,4,798,45,76,79,1,3,2]))