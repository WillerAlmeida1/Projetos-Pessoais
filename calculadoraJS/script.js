//Trás todos os botões
const btn = document.querySelectorAll('.teclas button');
const equal = document.querySelector('.equal')
const clean = document.querySelector('.c')
const simbols = ['+', '-', '*', '/']
let painel = document.querySelector('.painel')


const mostraValor = (arr) => {
  arr.forEach(e => {
    e.addEventListener('click', () => {
      let value = e.innerText
      resultado = painel.innerText += value
      console.log(`${resultado}`)
      return resultado
    })
  })
}

const fazOperacoes = (nums) => {
  nums = eval(nums)
  painel.innerText = nums
  painel -= equal.innerText
  return painel
}

equal.addEventListener('click', () => {
  fazOperacoes(resultado)
})

clean.addEventListener('click', () => {
  painel.innerText -= ''
})



mostraValor(btn)

// Fazer uma funcao que recebe os valores de simbolos, as operacoes e outra funcao
// que percorre a string ve se ela possui um simbolo "x" e dentro disso a gente manda
// outra funcao para percorrer e se temos o simbolo "x", e o simbolo "x" é = simbolo "x"
// entao operecao = "x"
