function dados() {

   pokemons = {
    nome: 'Charizard',
    vida: 80,
    ataque: 25
  }

   adversario = {
    nome: 'Mewtwo',
    vida: 280,
    ataque: 95
  }

}

function atacarDnv() {
  let respostaAtaque = prompt('Você quer atacar?')

  if (respostaAtaque == 'S' && adversario.vida > 0) {
    let batalha = adversario.vida - pokemons.ataque

    adversario.vida = batalha

    console.log(`A vida atual do ${adversario.nome} é ${adversario.vida}`)
    atacarDnv()
  } else {
    (console.log('acabou'))
  }

}

dados()
atacarDnv()