//Trás todos os botões
const btn = document.querySelectorAll('.teclas button');
const equal = document.querySelector('.equal')
const clean = document.querySelector('.c')
const simbols = ['+', '-', '*', '/']
let painel = document.querySelector('.painel')

//Mostra o valor clicado no "painel"
const mostraValor = (arr) => {
  arr.forEach(e => {
    //Adiciona evento de click para todos os botões
    e.addEventListener('click', () => {
      let value = e.innerText
      resultado = painel.innerText += value
      console.log(resultado)
      return resultado
    })
  })
}


equal.addEventListener('click', () => {
  fazOperacoes(painel)
})


const fazOperacoes = (nums) => {
  nums = eval(nums)
  painel.innerText = nums
  painel -= equal.innerText
  console.log(painel)
  return painel
}

const apaga = () => {
  clean.addEventListener('click', () => {
    painel.innerText = ''
  })
}

mostraValor(btn)
apaga()


// Fazer uma funcao que recebe os valores de simbolos, as operacoes e outra funcao
// que percorre a string ve se ela possui um simbolo "x" e dentro disso a gente manda
// outra funcao para percorrer e se temos o simbolo "x", e o simbolo "x" é = simbolo "x"
// entao operecao = "x"
