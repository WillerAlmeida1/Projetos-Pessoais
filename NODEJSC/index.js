const { Person } = require('./person')
const dotenv = require("dotenv")
const pessoa = new Person('Willer')
dotenv.config();
// require('./modules/fs')
// require('./modules/path')
// require('./modules/http')
require('./modules/express')






//console.log(pessoa.sayMyName())