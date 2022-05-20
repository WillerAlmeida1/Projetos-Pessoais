//INFORMAÇÕES DO JOGADOR
function infoJogador() {
  let nomeJogador = prompt('Olá, qual seu nome?')

  let escolha = prompt(
    `Boas Vindas ${nomeJogador}, Quer ler o tutorial? S ou N`
  )
  //toUpperCase(escolha)

  if (escolha == 'S') {
    tutorial()
  } else {
    escolhePokemon()
  }
}

//TUTORIAL DO JOGO
function tutorial() {
  alert('O jogo funciona assim...')
}


//ESCOLHER O POKEMON
function escolhePokemon() {
  let pokemon = prompt('Escolha seu pokemon\n 1 - Charizard \n 2 - Gyarados, 3 - Pikachu')

  //NUMERO DO POKEMON

  if (pokemon == 1) {
    let escolhido = 'Charizard'
    pokemon = escolhido
  } else if (pokemon == 2) {
    let escolhido = 'Gyarados'
    pokemon = escolhido
  } else if (pokemon == 3) {
    pokemon = escolhido
  } else {
    alert('ERRO')
    escolhePokemon()
  }

  let pokemons = [
    {
    nome: 'Charizard',
    vida: 80,
    ataque: 25
    },

    {
      nome: 'Gyarados',
      vida: 85,
      ataque: 20
    },

    {
      nome: 'Pikachu',
      vida: 75,
      ataque: 23
    }
  ]

  //console.log(pokemons.ataque - 10)

  alert(`O pokemon escolhido foi o ${pokemon}.`)
}



//ATRIBUTOS
function atributosPokemon(escolhido) {
  ataqueDoPokemon = 25
  vidaDoPokemon = 50
}

//ATAQUE
function ataque() {
  dano = vidaDoAdversario - ataqueDoPokemon
}

infoJogador()
