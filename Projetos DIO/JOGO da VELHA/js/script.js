var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');


mudaJogador('X');

//Essa função faz escolher o quadrado e em seguida mudar o Jogador

function escolheQuadrado(id){

  if(vencedor !== null){
    return;
  }

  var quadrado = document.getElementById(id);

  if(quadrado.innerHTML !== '-'){
    return
  }


  
  quadrado.innerHTML = jogador;
  quadrado.style.color = '#000'

  if(jogador === 'X'){
    jogador = 'O'
  } else {
    jogador ='X'
  }

  mudaJogador(jogador);
  checaVencedor()
}

//

function mudaJogador(valor){

  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;

}

//

function checaVencedor(){

  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  if(checaSequencia(quadrado1, quadrado2, quadrado3)){
    mudaCor(quadrado1, quadrado2, quadrado3)
    mudarVencedor(quadrado1);
    return;
  }

  if(checaSequencia(quadrado4, quadrado5, quadrado6)){
    mudaCor(quadrado4, quadrado5, quadrado6)
    mudarVencedor(quadrado4);
    return;
  }

  if(checaSequencia(quadrado7, quadrado8, quadrado9)){
    mudaCor(quadrado7, quadrado8, quadrado9)
    mudarVencedor(quadrado7);
    return;
  }

  if(checaSequencia(quadrado1, quadrado4, quadrado7)){
    mudaCor(quadrado1, quadrado4, quadrado7)
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudaCor(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
}

if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudaCor(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
}

if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudaCor(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
}

if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudaCor(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
}

function mudarVencedor(quadrado){

  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;

}

let myButton = document.querySelectorAll('.button-group > button');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})


function mudaCor(quadrado1, quadrado2, quadrado3){

  quadrado1.style.background = '#F2DFBB'
  quadrado2.style.background = '#F2DFBB'
  quadrado3.style.background = '#F2DFBB'

}

function checaSequencia(quadrado1, quadrado2, quadrado3){
  var eIgual = false;

  if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eIgual = true;
  }

  return eIgual;
  }

}


function reiniciar(){
  vencedor = null;
  vencedorSelecionado.innerHTML = '';


  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    
    quadrado.style.background = '#eee'
    quadrado.style.color = '#eee'
    quadrado.innerHTML = '-';
  }

  mudaJogador('X');
  }

