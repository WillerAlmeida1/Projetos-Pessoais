const express = require('express')
const host = 'http://localhost:'
const port = 8080;
const app = express()


app.get('/home', (req, res)=>{
  res.status(200).send('<h1>Hello World</h1>')
})

app.get('/users', (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.com"
    },
    {
      name: "Jana Doe",
      email: "jana@doe.com"
    }
  ]

  res.status(200).json(users)
})

app.listen(port, ()=> console.log(`Rodando Com Express Na Porta ${host}${port}`))