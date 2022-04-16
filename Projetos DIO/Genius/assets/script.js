let order = [];
let clickedOrder = [];
let score = 0;

//0 - Verde
//1 - Vermelho
//2 - Amarelo
//3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.blue');
const yellow = document.querySelector('.blue');

let shufflerOrder = () => {
  let colorOrder = math.floor(math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order){
    let elementColor = createColorElement(order[i]) 
    lightColor(elementColor, Number(i) + 1);
  }
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  })
}

let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]){
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou!`);
    nextLevel();
  }
}


let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');


  setTimeout(() => {
    createColorElement(color).classList.remove('selected')

  })

  checkOrder();
}