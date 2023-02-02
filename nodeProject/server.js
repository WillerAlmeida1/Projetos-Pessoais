const stats = require('./pcRamUsage')
const http = require('http')
const host = 'http://localhost' 
const port = 3000


//CRIA O SERVER
http.createServer((req, res)=>{
  let url = req.url

  //VERIFICA SE ESTAMOS NA ROTA CERTA E RODA O "STATS"
  if(url === '/stats'){
    res.end(JSON.stringify(stats, null, 2))

    //SE NÃO, ESTAREMOS NA "HOME"
  } else {
    res.end('<h1>Host</h1>')
  }

}).listen(port, ()=> console.log(`server is running ${host}:${port}`))

