function mostraIdade(nome, idade){
  return `A idade de ${nome} é ${idade}`
}


function mostraCidade(cidade, caracteristica){
  return `A cidade de ${cidade} é ${caracteristica}`
}

/*function dados(){
  mostraIdade()
  mostraCidade()
}*/

function pares(i){
  for(i = 0; i <= 50; i++){
    if(i % 2 == 0){
      console.log(`é par   ${i}`)
    } else {
      console.log(`é impar ${i}`)
    }
  }
}


export{
  mostraIdade,
  mostraCidade,
  pares,
}

