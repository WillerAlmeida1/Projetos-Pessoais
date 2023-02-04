const express = require('express')
const userModel = require('../src/models/user.model')
const host = 'http://localhost:'
const port = 8080;
const app = express()

//Para usar o .json sem erros no postman
app.use(express.json())

//Usando EJS
app.set('view engine', 'ejs')
app.set('views', 'src/views') 


//Middleware
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`)
  console.log(`Request Type: ${req.headers['content-type']}`)
  console.log(`Date: ${new Date()}`)

  next()
})

//Criando nova EndPoint - Para EJS
app.get('/views/users', async (req, res) =>{
  const users = await userModel.find({})

  res.render('index', { users })
})

//Para procurar um usuario em /users
app.get('/users', async (req, res) => {
  try {
    const users = await userModel.find({});

    res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

//Para procurar um usuario por id em /users
app.get('/users/:id', async (req, res) => {
  try {
    const id = req.params.id

    const user = await userModel.findById(id);

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

//Para criar um user em /users
app.post('/users', async (req, res) => {
  try {
    const user = await userModel.create(req.body)
  
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Para atualizar apenas 1 determinada informação de um usuario
app.patch('/users/:id', async(req, res) => {
  try {
    const id = req.params.id
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true })
     

    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

//Para deleter um user pelo ID
app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await userModel.findByIdAndDelete(id)

    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

app.listen(port, ()=> console.log(`Rodando Com Express Na Porta ${host}${port}`))