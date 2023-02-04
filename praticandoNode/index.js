// const http = require('http')
// const host = 'http://localhost:'
// const port = 8080

// const server = http.createServer((req, res)=>{
//   res.end('<h1>Funcionando</h1>')
// })

// server.listen(port, () => console.log(`Rodando na porta ${host}${port}`))


const express = require('express')
const app = express();
const host = 'http://localhost:'
port = 8080

app.get('/', (req, res) => {
  res.end('<h1>Funcionando com express</h1>')
})

app.get('/outramsg', (req, res)=>{
  res.end('<h1>OUtra msg</h1>')
})

app.get('/outramsg/msg', (req, res) => {
  res.end('<h1>Mensagem aninhada</h1>')
})

app.listen(port, () => console.log(`Rodando no ${host}${port}`))