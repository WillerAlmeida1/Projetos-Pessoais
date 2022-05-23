function dados() {

   pokemons = {
    nome: 'Charizard',
    vida: 80,
    ataque: 100
  }

   adversario = {
    nome: 'Mewtwo',
    vida: 280,
    ataque: 15
  }

}

//Função de batalha entre os pokemons
function duelo() {

  let respostaAtaque = prompt(`Adversário: ${adversario.nome} || HP: ${adversario.vida} || \nA: Atacar || B: Curar`)

  if (respostaAtaque == 'A' && adversario.vida >= 0 && pokemons.vida >= 0) {

    let batalha = adversario.vida - pokemons.ataque

    adversario.vida = batalha

    adversarioDerrotado()
  
    // Função de ataque do adversario.
    ataqueAdversario()   
  
    // Chama função de batalha dnv se a condição for TRUE.
    duelo()             

    } else {

      alert(`O ${pokemons.nome} foi derrotado.`)
      //Função de restart <<<
    }

}


function ataqueAdversario(){
  alert(`Agora é a vez do ${adversario.nome}`)
  alert(`Seu HP é: ${pokemons.vida}`)

  let ataqueInimigo = pokemons.vida - adversario.ataque
  
  pokemons.vida = ataqueInimigo
}

function adversarioDerrotado(){
  if(adversario.vida > 0){
      
    alert(`A vida atual do ${adversario.nome} é ${adversario.vida}`)


  }
}





dados()
duelo()


//vidaAnterior = pokemons.vida + adversario.ataque