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


// const site = {
//   nome : 'espacial',
//   tipo : 'novo'
// }

// const { nome, tipo } = site

// console.log(nome)


// const site2 = {
//   nome2 : 'navios',
//   tipo2 : 'novo'
// }

// const { nome2, tipo2 } = site2

// console.log(nome2)

// let pessoa = {
//   nome : 'Alvin',
//   dizerNome: function(){
//     console.log(`O meu nome é ${this.nome}`)
//   }
// }

// pessoa.dizerNome();



// class menu {
//   constructor(menu) {
//     this.menuElement = document.querySelector(menu);
//   }

//   addActiveEvent() {
//     this.menuElement.addEventListener('click', function(event) {
//       event.target.classList.add("active");
//     });
//   }
// }

// const menu = new menu(".principal");
// menu.addActiveEvent();
// console.log(menu)


const nums = [1,2,6,48,9,8,4,651,2311,58]

const retornaOmaior = (arr) => { return arr.sort(function(a,b){return a - b}).reverse().slice(0,1)}

console.log(retornaOmaior(nums))