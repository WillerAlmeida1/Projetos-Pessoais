//Trás todos os botões
const btn = document.querySelectorAll('.teclas button');

//Trasnforma nodeList em um array
const arr = [...btn];

//Teste

for(i in arr){

 // console.log(arr[i].innerHTML)

  arr[i].addEventListener('click', ()=> {
    console.log(arr[i])
  })
}



console.log(arr[0].innerHTML)