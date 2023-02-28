//Trás todos os botões
const btn = document.querySelectorAll('.teclas button');
let campo = []
const simbols = ['+', '-', '*', '/']
//Percorre o array de botões e retorna o valor
//Ao ser clicado
const percorreArr = (arr) => {
  arr.forEach(e => {
    e.addEventListener('click', ()=>{
      campo.push(e.innerText)
      return campo
    })
  });
}

const fazConta2 = (arr) => {
  setTimeout(()=>{
    campo = campo.join('')
    console.log(campo)
    return campo
  },2000)
}


const fazConta = (arr) => { setTimeout(()=>{
  arr.map((i)=> {
    //return arr[i].split(',').join('')
  })
  // arr.join(',').push(arr)
  console.log(arr)
  return arr
}, 2000)
}

percorreArr(btn)
fazConta(campo)
fazConta2(campo)
