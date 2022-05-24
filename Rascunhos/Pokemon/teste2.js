function jogo() {
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
  function checaAtaque() {
    respostaAtaque =
      prompt(`Adversário: ${adversario.nome}🟪 || HP: ${adversario.vida}🩸 \nA: Atacar || B: Curar || C: Sair \n
      Seu Pokemon: ${pokemons.nome} 🐲|| HP: ${pokemons.vida}🩸`)

    if (pokemons.vida < 0 && adversario.vida < 0) {
      ataquePokemon()
      ataqueAdversario()
      reiniciar()
    } else if (respostaAtaque == 'a') {
      // Função de ataque do adversario.
      ataquePokemon()
      // Função de ataque do adversario.
      ataqueAdversario()
      // Chama função de batalha dnv se a condição for TRUE.
      checaAtaque()
    } else if (
      respostaAtaque != 'a' &&
      respostaAtaque != 'b' &&
      respostaAtaque != 'c'
    ) {
      alert(`Insira o 'A', 'B' ou 'C' para continuar!`)
      checaAtaque()
    } else if (respostaAtaque == 'c') {
      confirm('Finalizar')
    }
  }

  function ataquePokemon() {
    if (adversario.vida >= 0) {
      alert('É a sua vez 🐲')

      alert(`o adversario recebeu ${pokemons.ataque} de dano 💥`)
      let batalha = adversario.vida - pokemons.ataque

      adversario.vida = batalha
    } else if (adversario.vida <= 0) {
      alert(`o ${adversario.nome} foi derrotado ❌🟪`)
      reiniciar()
    }
  }

  function ataqueAdversario() {
    if (pokemons.vida >= 0) {
      alert('Vez do Mewtwo 🟪')

      alert(`Você recebeu ${adversario.ataque} de dano 💥`)
      let ataqueInimigo = pokemons.vida - adversario.ataque

      pokemons.vida = ataqueInimigo
    } else if (pokemons.vida <= 0) {
      alert(`o ${pokemons.nome} foi derrotado, você perdeu! ❌🐲`)
      reiniciar()
    }
  }

  function reiniciar() {
    let gameOver = prompt('Quer jogar de novo?\n S - Sim || N - Não')
    if (gameOver == 's') {
      jogo()
    } else {
      alert('Obrigado por jogar!')
    }
  }

  dados()
  checaAtaque()
}

jogo()

//vidaAnterior = pokemons.vida + adversario.ataque
