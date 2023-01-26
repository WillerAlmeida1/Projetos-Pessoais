function jogo(){

  let escolhaDoUser = parseInt(prompt('Qual Persoganem voce quer?\n 1 - Dragão 2 - Orc'))

  const monstro1 = {
    nome: 'Dragão',
    vida: 500,
    atk: 150
  }

  const monstro2 = {
    nome: 'Orc',
    vida: 700,
    atk: 90
  }

  if(escolhaDoUser == 1){

    escolhaDoUser = monstro1

  } else if (escolhaDoUser === 2){

    escolhaDoUser = monstro2

  }

  const monstroInimigo1 = {
    nome: 'Elfo',
    vida: 450,
    atk: 165
  }

  const monstroInimigo2 = {
    nome: 'Golem',
    vida: 800,
    atk: 100
  }

  const whatEnemy = () => {
    let random = Math.random();
    let enemy = Math.floor(random * 2) + 1;

    if(enemy === 1){
      enemy = monstroInimigo1
    } else if(enemy === 2){
      enemy = monstroInimigo2
    }

    return enemy
  }

  const enemy = whatEnemy();

  const battle = (monstro, monstroInimigo) => {
    console.log(`${monstro.nome}: ${monstro.vida}`)
    console.log(`${monstroInimigo.nome}:${monstroInimigo.vida}`)

    let action = parseInt(prompt('Qual a sua ação? \n 1 - Ataque 2 - Cura 3 - Defesa'))
    if(monstro.vida > 0 && monstroInimigo.vida > 0){

      monstro.vida -= monstroInimigo.atk
      monstroInimigo.vida -= monstro.atk

      console.log(`${monstro.nome}: ${monstro.vida}`)
      console.log(`${monstroInimigo.nome}:${monstroInimigo.vida}`)

      if(monstro.vida <= 0 || monstroInimigo.vida <= 0){
        console.log('A batalha acabou')

        reiniciar = prompt('Quer jogar de novo?')
        if(reiniciar === 's'){
          jogo()
        } else if( reiniciar === 'n'){
          alert('obrigado por jogar')
          return 
        }
      }
    }
    
    if(action === 1){
      battle(monstro, monstroInimigo)
    } else if (action === 2){
      cura(escolhaDoUser)
      battle(monstro, monstroInimigo)
    } else if(action === 3){
      defesa(monstroInimigo)
      battle(monstro, monstroInimigo)
    }
  }

  
  const cura = (monstro) => {
    monstro.vida += 50
  }
  
  const defesa = (monstroInimigo) => {
    monstroInimigo.atk = 0
  }

  console.log(battle(escolhaDoUser, enemy))
}

jogo()



/*
  const battle = (monstro, monstroInimigo) => {
    while(monstro.vida > 0 && monstroInimigo.vida > 0){

      monstro.vida -= monstroInimigo.atk
      monstroInimigo.vida -= monstro.atk

      console.log(`Monstro: ${monstro.vida}`)
      console.log(`Monstro Inimigo:${monstroInimigo.vida}`)
    }


  }
  
  const cura = (monstro) => {
    monstro.vida += 50
  }
  
  const defesa = (monstroInimigo) => {
    monstroInimigo.atk = 0
  }

  const fight = battle(escolhaDoUser, enemy)
  console.log(fight)
*/