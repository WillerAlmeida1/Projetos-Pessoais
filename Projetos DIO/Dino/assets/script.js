const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let isGameOver = false;
let position = 0;

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump(){
  isJumping = true;

  let upInterval = setInterval(() => {
    if(position >= 150){
      //desce
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if(position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      //sobe
      position += 20;
      dino.style.bottom = position + 'px';
    }
  }, 40);
}

function createCactus() {
  const cactus = document.createElement('div');
  let cactusPosition = 2000;
  let randomTime = Math.random() * 6000;

  if(isGameOver) return;

  cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactus + 'px';

  let leftTimer = setInterval(() =>{
    if(cactusPosition < -90) {
      //sai da tela
      clearInterval(leftTimer);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      //gameover
      clearInterval(leftTimer);
      isGameOver = true;
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 15;
      cactus.style.left = cactusPosition + 'px';
    }
  }, 30);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);