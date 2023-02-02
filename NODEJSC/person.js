class Person{
  constructor(name){
    this.name = name
  }

  sayMyName(){
    return `Olá ${this.name}`
  }
}


module.exports = {
  Person,
}