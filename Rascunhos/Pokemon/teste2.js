
function loop(){
  let i = 0

  do {
    i -= 2;
    console.log(i);
  } while (i > 5);
}


//ataque()


function ataque(){
        
  let pokemons = 
    {
      nome: 'Charizard',
      vida: 80,
      ataque: 25
    };

  let adversario =
   {
    nome: 'Mewtwo',
    vida: 280,
    ataque: 95
   };
   
   let batalha = adversario.vida - pokemons.ataque    
   
   adversario.vida = batalha;

  function loop2(){
    let i = adversario.vida

    do {
      i -= pokemons.ataque;
      console.log(i);
    } while (i > 5);
    
    adversario.vida = i
  }
  loop2()
  
  console.log(`A vida do ${adversario.nome} é ${batalha}//teste ${adversario.vida}`)
}


function atacar(){
  let respostaAtaque = prompt('Você quer atacar?');

  let pokemons = 
  {
    nome: 'Charizard',
    vida: 80,
    ataque: 25
  };

let adversario =
 {
  nome: 'Mewtwo',
  vida: 280,
  ataque: 95
 };
 
 
 function atacarDnv(){
   do {
     
     let batalha = adversario.vida - pokemons.ataque    
     
     adversario.vida = batalha;
    
      if(respostaAtaque == 'S'){
        let i = adversario.vida
        let briga = adversario.vida - pokemons.ataque
    
        adversario.vida = i
    
        console.log(`a vida agora é ${briga}`)
    
      } else {
    
        alert('Acaba aqui')
    
      }


    } while (adversario.vida > 10);
  }
  atacarDnv()
}

atacar()