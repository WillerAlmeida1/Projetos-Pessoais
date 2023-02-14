//Declara as variaveis necessarias
const cep = document.querySelector('#cep')
const btn = document.querySelector('.button')
const resultado = document.querySelector('#resultado')

//Evento que faz requisição a API
const clicado = () => {
  //Evento de botão
  btn.addEventListener('click', async () => {
    try {
      //Trata o CEP, retira "-" e substitui por ""
      const endereco = cep.value.toString().replace('-', '')

      //Checa Tamanho do CEP
      if (cep.value.length == 8 || cep.value.length == 9) {

        //Faz a requisição a API
        const consulta = await fetch(`https://viacep.com.br/ws/${endereco}/json/`)
        const data = await consulta.json()
        mostraDados(data)
      } else {
        alert('Cep Invalido!')
      }
    } catch (e) {
      console.log(`ERRO: ${e.message}`)
    }
  })
}

//Altera o DOM com os dados
const mostraDados = dados => {
  resultado.innerHTML = 
  `<p>RUA: ${dados.logradouro}</p>
   <p>ESTADO: ${dados.uf}</p>
   <p>CIDADE: ${dados.localidade}</p>
   <p>BAIRRO: ${dados.bairro}</p>
   <p>DDD: ${dados.ddd}</p>`
}

clicado()
