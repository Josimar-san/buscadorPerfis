import '@picocss/pico'
import './style.css'

const formConsultarPerfis = document.querySelector('#consultarPerfis')
const inputPerfis = formConsultarPerfis.perfis // seleciona o input do cep a partir do formulário
const divDados = document.querySelector('#dados')
const btnConsultarPerfis =
  document.querySelector('#btnConsultarPerfis')
/* const loader =
  `<a href="#" aria-busy="true">
    Consultando CEP, aguarde...
  </a>` */

formConsultarPerfis.addEventListener('submit', function (event) {
  event.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  ativaLoader(true)
  consultarPerfis(inputPerfis.value) // invoca a função passando o cep digitado por parâmetro
})

async function consultarPerfis(perfis) {
  let response = await fetch(`https://api.github.com/users/<nome_usuario>`)
  let dadosPerfis = await response.json()
  if (dadosPerfis.erro) {
    divDados.innerHTML = `
      <div class="erro">CEP não encontrado!</div>
    `
  } else {
    divDados.innerHTML = `
    <p> Nome: ${dadosUsuario.name}  </p>
    <p> Localidade: ${dadosCep.localidade}  </p>
  `
  }
  ativaLoader(false)
}

function ativaLoader(ativo) {
  if (ativo) {
    btnConsultarPerfis.
      setAttribute('aria-busy', 'true')
    btnConsultarPerfis.
      textContent = 'Consultando CEP...'
  } else {
    btnConsultarPerfis.removeAttribute('aria-busy')
    btnConsultarPerfis.
      textContent = 'Consultar'
  }
}
