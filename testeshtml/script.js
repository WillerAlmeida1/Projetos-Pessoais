// const caixaDeTexto = document.getElementById('caixa-texto')
// const caixaDeTexto2 = document.getElementById('caixa-texto2')
// const botao = document.getElementById('button')
// const botao2 = document.getElementById('button2')
// const mais = document.getElementById('mais')


// function pegaTexto(){
//   botao.addEventListener('click', function(){
//     let pegaPalavra = parseInt(caixaDeTexto.value)
//     console.log(pegaPalavra)
//   })
// }

// function pegaTexto2(){
//   botao2.addEventListener('click', function(){
//     let pegaPalavra = parseInt(caixaDeTexto2.value)
//     console.log(pegaPalavra)
//   })
// }

// function sum(){
//   mais.addEventListener('click', function(){
//     console.log(parseInt(caixaDeTexto.value) + parseInt(caixaDeTexto2.value))
//   })
// }
// //const soma = (a, b) => {return a + b}

// pegaTexto()
// pegaTexto2()
// sum(caixaDeTexto.value, caixaDeTexto2.value)


const user = {
  nome: 'carlos',
  idade: 18,
  cargos : {
    junior: 'junior 1',
    pleno: 'ainda nao'
  }
}

const { nome, idade } = user
const { pleno } = user.cargos

console.log(pleno)