
var nums = [1, 3, 4, 5, 6, 7, 1, 3, 6]

for(let i = 0; i < nums.length; i++){
  console.log(nums[i])
};

let livros = ['Harry Potter', 'Got', 'Guia do Mochileiro']

for(let i = 0; i < livros.length; i++){
  console.log(`${i} - ${livros[i]}`)
}

for(let i = 0; i < 50; i++){
  if(i % 2 == 0){
    continue;
  }
  console.log(i)
}



let arr = [1, 2, 3, 5, 9, 10, 11]

for(let i of arr){
  if(i % 2 ==0){
    console.log(` é par: ${i}`)
  }
}


for(let i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log(`${i} PING PONG`)
  } else if (i % 3 == 0){
    console.log(`${i} PING`)
  } else if (i % 5 == 0){
    console.log(`${i} PONG`)
  }
}
