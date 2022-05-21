//INFORMAÇÕES DO JOGADOR
function infoJogador() {
  let nomeJogador = prompt('Olá, qual seu nome?')

  let escolha = prompt(
    `Boas Vindas ${nomeJogador}, Quer ler o tutorial? S ou N`
  )
  //toUpperCase(escolha)

  if (escolha == 'S') {
    tutorial()

  } else if (escolha == 'N') {

    alert('Então vamos escolher seu Pokemon :D')
  }

}

//TUTORIAL DO JOGO
function tutorial() {
  alert('O jogo funciona assim...')
}


//ESCOLHER O POKEMON
function escolhePokemon() {
  let pokemon = Number(prompt('Escolha seu pokemon\n 1 - Charizard \n 2 - Gyarados \n 3 - Pikachu'))

    if(pokemon >= 4){

      alert('Erro')
      escolhePokemon()

    } else {

      if (pokemon == 1) {
        let escolhido = 'Charizard'
        alert(`O pokemon escolhido foi o ${escolhido}.`)
      } else if (pokemon == 2) {
        let escolhido = 'Gyarados'
        alert(`O pokemon escolhido foi o ${escolhido}.`)
      } else if (pokemon == 3) {
        let escolhido = 'Pikachu'
        alert(`O pokemon escolhido foi o ${escolhido}.`)
      }
     
      ataque()
      
      function ataque(){
        
        let pokemons = [
          {
            nome: 'Charizard',
            vida: 80,
            ataque: 25
          }
      ]
      
      let adversario = 'Mewtwo'
      let vidaDoAdversario = 100
      let briga = pokemons.ataque - vidaDoAdversario

      alert(pokemons.ataque)
      
      alert(`A vida do ${adversario} é ${briga}`)
    };
    
    
  
  }
  
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
escolhePokemon()
ataque()
