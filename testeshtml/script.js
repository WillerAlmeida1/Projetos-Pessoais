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

// const nums = [1,2,6,48,9,8,4,651,2311,58]

// const retornaOmaior = (arr) => { return arr.sort(function(a,b){return a - b}).reverse().slice(0,1)}

// console.log(retornaOmaior(nums))

// const arrayInfo = [
//   "Credito",
//   "R$ 200",
//   "R$ 400",
//   "Contas Pagar",
//   "R$ 300",
//   "R$ 400",
//   "Meus Dados"
// ]

// const precoFiltro2 = (arr) => {return arr.filter(function(i){if(i.includes("R$")){return true} else {return false}})}

// console.log(precoFiltro2(arrayInfo))

// const precosFiltro = arrayInfo.filter(function(i) {
//   //console.log(i)
//   if( i.includes("R$")){
//     //console.log(i)
//     return true
//   } else {
//     return false
//   }
// })

//console.log(precosFiltro)

// const apenasNum = (outraFunc) => {
//   return somaValoresFilter(outraFunc).map(function(i){
//     return Number(i.replace('R$ ', '').replace('U$ ', ''))
//   })
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const somaNums = array => {
//   return array.reduce((acc, item) => {
//     return acc + item
//   })
// }
//console.log(somaNums(nums))

// const dados = [
//   'Carlos',
//   'Ana',
//   'R$ 500',
//   'R$ 110',
//   'U$ 20',
//   'U$ 52',
//   '',
//   '',
//   ''
// ]

// const somaValoresFilter = arr => {
//   return arr.filter(item => {
//     return item.includes('R$') || item.includes('U$')
//   })
// }

// const apenasNum = outraFunc => {
//   return somaValoresFilter(outraFunc).map(item => {
//     return Number(item.replace('R$ ', '').replace('U$ ', ''))
//   })
// }

// const somaOsValores = func => {
//   return func.reduce((acc, item) => {
//     return acc + item
//   })
// }

// console.log(somaOsValores(apenasNum(somaValoresFilter(dados))))
// console.log(apenasNum(somaValoresFilter(dados)))
//console.log(somaValoresFilter(dados))


// let number = 2

// if(number === 3 ){
//   console.log(number.valueOf(function(){
    
//   }))
// }




//CLASSES


// class Person {
//   constructor(name){
//     this.name = name
//   }
// }

// let person = new Person('Silva')


// console.log(person.name)


// class Monstro {
//   constructor(nome, atk, def){
//     this.nome = nome
//     this.atk = atk
//     this.def = def
//   }

//   chamaMon(){
//     console.log(`o nome é ${this.nome}, o ataque é ${this.atk} e a def ${this.def}`)
//   }
// }


// const monstro1 = new Monstro('Ghidorah', '5000', '4000')

// monstro1.chamaMon()


// class MonstroInimigo extends Monstro {
//   constructor(nome, historia, atk) {
//     super(nome, atk)
//     this.historia = historia
//   }

//   logSimples(){
//     console.log(`O monstro ${this.nome} é de ${this.historia} e tem ${this.atk}`);
//   }
// }

// const monstrengo = new MonstroInimigo('Godzilah', 'Japao', '8000')

// monstrengo.logSimples()


// const loginUser = (email, password) => {
//   setTimeout(()=>{

//   },2000)
//   return new Promise((resolve, reject) => {
//     const error = false

//     if(error) {
//       reject(new Error('error in login'))
//     }

//     console.log("usuario logado")
//     resolve({email})
//   })
// }

// loginUser('aa@gmail.com', '123456').then((user) => {
//   console.log({user})
// })


// Criar uma função que retorna uma Promise resolvida com um valor aleatório após um tempo específico. Em seguida, utilize o await para esperar a resolução da Promise e imprimir o valor retornado.


// const retornaNumAleatorio = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false
//       if(error){
//         reject(new Error(error.message))
//       }
//       const num = Math.random()
//       resolve(num)
//     }, 1000)
//   })
// }

// const retornaPromise = async () => {
//   try {
//     const numAleatorio = await retornaNumAleatorio()
//     console.log(numAleatorio)
//   } catch (e){
//     console.log(e)
//   }
// }

// retornaPromise()

//fetch('https://api.adviceslip.com/advice').then((response) => console.log(response.json()))