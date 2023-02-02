const fs = require('fs')

const path = require('path') 

//criar uma pasta

// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//   if(error){
//     return console.log(`Erro: ${error}`)
//   }

//   console.log('Pasta criada com sucesso')
// })

//Criar um arquivo ou sobrescrever
fs.writeFile(path.join(__dirname, '/teste', 'test.txt'), 'hello node!', (error)=>{
  if(error){
    return console.log(`Erro: ${error}`)
  }

  console.log('arquivo criado com sucesso')
})

//Adicionar algo ou alterar um arquivo existente
fs.appendFile(path.join(__dirname, '/teste', 'test.txt'), 'hellow world!', (error)=>{
  if(error){
    return `ERRO: ${error}`
  }

  console.log('alteração feita com sucesso')
})

//Ler um arquivo

fs.readFile(path.join(__dirname, '/teste', 'test.txt'), 'utf8', (error, data)=>{
  if(error){
    return console.log(`ERRO: ${error}`)
  }

  console.log(data)
})