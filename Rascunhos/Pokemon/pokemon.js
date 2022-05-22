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
    
  }
  ataque()
}

//FUNÇÃO PARA ATAQUE DO JOGO
function ataque(){
        
  let pokemons = 
    {
      nome: 'Charizard',
      vida: 80,
      ataque: 85
    };

  let adversario =
   {
    nome: 'Mewtwo',
    vida: 280,
    ataque: 95
   };
   
   let batalha = adversario.vida - pokemons.ataque    
   
   adversario.vida = batalha;

  

  console.log(`A vida do ${adversario.nome} é ${batalha}//teste ${adversario.vida}`)


    
    


//chamabatalha()


//CHAMA FUNÇÃO ATAQUE ENQUANTO INIMIGO TIVER VIDA
/*function chamabatalha(){
  
  if(batalha > 0){
    
    batalha
    
    console.log(batalha)
    
    } else if (batalha <= 0){
      
      alert('voce venceu')
    
    }
    
  }
  */

  //FUNÇÃO PARA ATAQUE DO INIMIGO
  function ataqueDoAdversario(){
  
  let batalha2 = pokemons.vida - pokemons.vida  
  
  alert(`sua vida é ${batalha2}`)
  
  }
  
};




infoJogador()
escolhePokemon()

//POSSO CONSTRUIR UMA NOVA VARIAVEL PARA NOVO DANO ;;;;<<<<<<<----