function dados() {

   pokemons = {
    nome: 'Charizard',
    vida: 80,
    ataque: 50
  }

   adversario = {
    nome: 'Mewtwo',
    vida: 280,
    ataque: 95
  }

}

function atacarDnv() {

  let respostaAtaque = prompt('Você quer atacar?')

  if (respostaAtaque == 'S' && adversario.vida >= 0 && pokemons.vida >= 0) {
    let batalha = adversario.vida - pokemons.ataque

    adversario.vida = batalha

    alert(`A vida atual do ${adversario.nome} é ${adversario.vida}`)

    if(pokemons.vida < 0){

      alert(`Seu HP é: ${pokemons.vida}`)

    } else {

      alert('vc perdeu')

    }
    
    alert(`Agora é a vez do ${adversario.nome}`)

    let ataqueInimigo = pokemons.vida - adversario.ataque
    
    pokemons.vida = ataqueInimigo
  

    atacarDnv()

    } else {

      (console.log('acabou'))

    }

}
/*
function ataqueAdversario(){

  if(pokemons.vida > 0){
    let ataqueInimigo = pokemons.vida - adversario.ataque
    
    pokemons.vida = ataqueInimigo
  
    console.log(`Seu HP é: ${pokemons.vida}`)
    ataqueAdversario()
  } else {

    console.log('perdeu')

  }
}

function checaAtaques(){
  if(){

  };
}
*/


dados()
atacarDnv()


//vidaAnterior = pokemons.vida + adversario.ataque