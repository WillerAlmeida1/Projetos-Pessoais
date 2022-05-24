function dados() {
  pokemons = {
    nome: 'Charizard',
    vida: 80,
    ataque: 25
  }

  adversario = {
    nome: 'Mewtwo',
    vida: 280,
    ataque: 50
  }
}

//Função de batalha entre os pokemons
function duelo() {
  respostaAtaque =
    prompt(`Adversário: ${adversario.nome} || HP: ${adversario.vida} || \nA: Atacar || B: Curar || C: Sair \n
  Seu Pokemon: ${pokemons.nome} || HP: ${pokemons.vida}`)

  if (respostaAtaque == 'a' && adversario.vida >= 0 && pokemons.vida >= 0) {
    let batalha = adversario.vida - pokemons.ataque

    adversario.vida = batalha

    // Função de ataque do adversario.
    ataqueAdversario()

    // Chama função de batalha dnv se a condição for TRUE.
    duelo()
    checaTrue()
    atq()
  } else if (
    respostaAtaque != 'a' &&
    respostaAtaque != 'b' &&
    respostaAtaque != 'c'
  ) {
    alert(`Insira o 'A', 'B' ou 'C' para continuar!`)
    duelo()
  } else if (respostaAtaque == 'C') {
    confirm('Finalizar')
  } else if (pokemons.vida >= 0) {
    alert(`O ${pokemons.nome} foi derrotado.`)
    //Função de restart <<<
  } else if (adversario.vida >= 0) {
    alert(`O ${adversario.nome} foi derrotado.`)
    //Função de restart <<<
  }
}

function ataqueAdversario() {
  if (pokemons.vida > 0) {
    alert('Vez do Mewtwo')

    alert(`Você recebeu ${adversario.ataque} de dano`)
    let ataqueInimigo = pokemons.vida - adversario.ataque

    pokemons.vida = ataqueInimigo
  } else if (pokemons.vida < 0) {
  }
}

function checaTrue() {
  if (respostaAtaque == 'a') {
    respostaAtaque = true
  }
}

function atq() {
  if (respostaAtaque == true) {
    console.log('deu certo')
  }
}

dados()
duelo()

//vidaAnterior = pokemons.vida + adversario.ataque

