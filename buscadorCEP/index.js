const cep = document.querySelector("#cep")
const btn = document.querySelector(".button")

const clicado = () => {
  btn.addEventListener('click', async()=> {
    try{
        const endereco = cep.value
        const consulta = await fetch(`https://viacep.com.br/ws/${endereco}/json/`)
        const data = await consulta.json()
        return data
    } catch (e) {
      console.log(`esta errado ${e.message}`)
    }
  })
}

clicado()