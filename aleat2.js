//Questao 5 ✓
function crieArray(n){
  arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr
}
// console.log(fazArray(5))

//Questao 6 ✓
function somaDosMaiores(num1, num2, num3){
  arr = [num1, num2, num3]
  arr.sort(function(a,b){return a - b}).reverse()

  return sum = arr[0] + arr[1]
}
// console.log(somaDosMaiores(2, 5, 1))

//Questao 7 ✓
function decidirCompra (preco, parcelas) {
  if(preco >= 1000 && parcelas >= 10){
    return 'Vou comprar'
  }
  else if(preco >= 500 && parcelas >= 5){
    return 'Vou comprar'
  }
  else if(preco <= 500){
    return 'Vou comprar'
  }
  else{
    return 'Não vou comprar'
  }
}

//Questao 8 ✓
function somaDosImpares(arr){
  soma = 0
  let novoArr = []
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] % 2 === 1){
      novoArr.push(arr[i])
    }
  }

  for(let i = 0; i < novoArr.length; i++){
    soma += novoArr[i]
  }
  return soma
}
// console.log(somaDosImpares([3,6,8,9]))

//Questao 9 ✓
function ehPalindromo(string){
  const verificaPalindromo = string.split('').reverse().join('')

  if(verificaPalindromo === string){
    return 'sim'
  }
  return 'não'
}
// console.log(ehPalindromo('ababa'))

//Questao 10 X
function indiceDoValor(array, valor){

  let encontraValor = array[valor]
  let tudoJunto = indexOf(encontraValor)
  return tudoJunto 
}
// console.log(indiceDoValor([10,30,50,70,90],0))


//Questao 11 ✓
function yinYang(array){
  stringTotal = ''
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0 && array[i] % 3 === 0) {
      stringTotal += 'YinYang'
    }
    else if(array[i] % 2 === 0){
      stringTotal += 'Yin'
    }
    else if(array[i] % 3 === 0){
      stringTotal += 'Yang'
    } 
    else {
      stringTotal += array[i]
    }
  }
  return stringTotal
}
// console.log(yinYang([1,2,5,6,11,13,15]))


//Questao 12 ✓
function ehNumeroDriven(num) {
  n = 0
  encontraNum = 0

  while (encontraNum != num) {
    encontraNum = 3 ** n - 1
    n++
    if(encontraNum === num){
      return `é desse tipo`
    } else if(n > num){
      return `não é desse tipo`
    }
  }
}
// console.log(ehNumeroDriven(8))

//Questao 13 ⇹ 6de8
function xadrez(posicaoTorre, posicaoAdversario){
  separaArrTorre = posicaoTorre.split('')
  separaArrAdversario = posicaoAdversario.split('')

  for(let i = 0; i <= 8; i++){
    for(let j = 0; j <= 8; j++){
      if(separaArrTorre[i][j] == separaArrAdversario[i] || separaArrAdversario[j]){
        return `sim`
      }
      else {
        return `nao`
      }
    }
  }
}

function xadrez2(posicaoTorre, posicaoAdversario){
  separaArrTorre = posicaoTorre.split('')
  separaArrAdversario = posicaoAdversario.split('')

  for(i in separaArrTorre){
    if(separaArrTorre[i] === posicaoAdversario[0] && posicaoAdversario[1]){
      return `Sim`
    }
    else if(separaArrTorre !== posicaoAdversario [0] && posicaoAdversario[1]){
      return `Não`
    }
  }
}

function xadrez3(posicaoTorre, posicaoAdversario){
  separaArrTorre = posicaoTorre.split('')
  separaArrAdversario = posicaoAdversario.split('')

  x = separaArrTorre[0]
  y = separaArrTorre[1]

  ax = separaArrAdversario[0]
  ay = separaArrAdversario[1]

  if(x || y == ax && ay){
    return `Sim`
  }
  else if (x && y != ax && ay){
    return `Não`
  }
}
