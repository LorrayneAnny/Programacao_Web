// import './style.css';

import Header from '../Header';

export default function Introducao(){

    return(<>

    <Header/>
       
    <main class="container my-5">
      <h1 class="text-center">Transtornos Mentais</h1>
      <h2 class="text-center">Entenda como é classificado os Transtornos Mentais</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Transtornos Alimentares</li>
        <li class="list-group-item">Transtonos de Ansiedade</li>
        <li class="list-group-item">Transtornos Depressivos</li>
        <li class="list-group-item">Transtorno de Sintomas Somáticos</li>
        <li class="list-group-item">Transtornos Obsessivo-Compulsivo</li>
        <li class="list-group-item">Transtornos do Neurodesenvolvimento</li>
        <li class="list-group-item">Transtornos Bipolar e Transtonos Relacionais</li>
        <li class="list-group-item">Transtornos Relacionados a Trauma e a Estressores</li>
        <li class="list-group-item">Espectro da Esquizofrenia e Outros Transtornos Psicóticos</li>
      </ul>
      <p class="text-center my-4">Aprofunde mais em cada classificação por meio das informações disponibilizadas nos links a seguir:</p>
      <div class="d-flex justify">

        {/*<!-- Tag para redirecinamento de paginas -->*/}
        <br/><a href="https://acaciapsi.com.br/transtornos-mentais-dsm-5/" >Clique aqui/Acacia Psicologia e Psiquiatria</a>
        <br/><a href="https://telemedicinamorsch.com.br/blog/doencas-mentais">Clique aqui/Morsch Telemedicina</a>
        </div>
    </main>
    
    </>)
}   