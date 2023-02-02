const mongoose = require('mongoose')

const connectToDataBase = async () => {
  await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs.p4inszx.mongodb.net/?retryWrites=true&w=majority`, (error)=>{
    if(error){
      return console.log(`OCORREU UM ERRO AO SE CONECTAR COM O BANCO DE DADOS ||ERRO: >> ${error}`)
    }

    return console.log('Conexão ao banco de dados feita com sucesso!')
  })
}

module.exports = connectToDataBase