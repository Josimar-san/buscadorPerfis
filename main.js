import '@picocss/pico'
import './style.css'

/* const formBuscarPerfis = document.querySelector('#BuscarPerfis');
const inputPerfis = formBuscarPerfis.perfis ;
const url = "https:// api.github.com/users";

async function buscarPerfis(perfis) {


}

formBuscarPerfis.addEventListener("keyup", (e) ==>) */



 const formBuscarPerfis = document.querySelector('#BuscarPerfis') 
 const inputPerfis = formBuscarPerfis.Perfis  // seleciona o input do cep a partir do formulário
const divDados = document.querySelector('#dados')
const btnBuscarPerfis =
  document.querySelector('#btnBuscarPerfis') 
/* const loader =
  `<a href="#" aria-busy="true">
    Consultando CEP, aguarde...
  </a>` */

 formBuscarPerfis.addEventListener('submit', function (event) { 
  event.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  ativaLoader(true)
  buscarPerfis(inputPerfis.value) // invoca a função passando o cep digitado por parâmetro
})

async function buscarPerfis(perfis) {
  let response = await fetch(`https://api.github.com/users/${perfis}`)
  let dadosPerfis = await response.json()
  if (dadosPerfis.erro) {
    divDados.innerHTML = `
      <div class="erro">Perfil não encontrado!</div>
    `
  } else {
    divDados.innerHTML = `
    <p> Avatar   ${dadosPerfis.avatar_url}  </p> 
    <p> Nome: ${dadosPerfis.name}  </p>
    <p> Perfil  ${dadosPerfis.html_url}  </p>
    
  `
  }  /* <p> Avatar   ${dadosPerfis.avatar_url}  </p>  // usar tag link  */
      /* <p> : ${dadosPerfis.html_url}  </p>  </p>  // usar tag link  */
  ativaLoader(false)
}

 function ativaLoader(ativo) {
  if (ativo) {
    btnBuscarPerfis.
      setAttribute('aria-busy', 'true')
    btnBuscarPerfis.
      textContent = 'Buscando Perfil...'
  } else {
    btnBuscarPerfis.removeAttribute('aria-busy')
    btnBuscarPerfis.
      textContent = 'Buscar'
  }
}  
