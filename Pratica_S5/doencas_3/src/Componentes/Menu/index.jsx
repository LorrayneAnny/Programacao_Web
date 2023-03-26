import virus_gama from '../../assets/images/virus_gama.png';
// import './style2.css';

import Header from '../Header';

export default function Menu(){

    return(<>
        
    <Header></Header>

    <div className='box_menu'>
      <p>As doenças podem ser classificadas de diversas maneiras, de acordo com suas características e causas. Algumas das principais classificações de doenças são:</p>
      
      {/* <!-- Tag ol para estruturação de lista ordenada --> */}
      <ol>
          <li>Classificação por tipo de agente causador</li>
          <li>Classificação por localização geográfica</li>
          <li>Classificação por grau de gravidade</li>
          <li>Classificação por sistema afetado</li>
          <li>Classificação por incidência</li>
          <li>Classificação por idade</li>
      </ol>
      <br/><br/>

      <div class="flex_l">

          <section>
              <h4>Vírus Gamma</h4> 

             {/* <!-- Tag para imagem --> */}
              <img src={virus_gama} alt="virus" id="virus" width={200} height={200}/>

          </section>

      {/* <!-- Tag section para delimitação de bloco--> */}
          <section>
              <h4 align="center">Tabela sobre Doenças</h4>

              {/* <!-- Tags table, tr,td para estrutura da tabela --> */}
              <table border="2"  class="table">
                  <tr>
                      <td class="titulo_tabela"> <strong>Nome</strong> </td>
                      <td class="titulo_tabela"> <strong>Descrição</strong> </td>
                  </tr>
                  <tr>
                      <td>Doenças cardiovasculares</td>
                      <td>Afetam o coração e os vasos sanguíneos. </td>
                  </tr>
                  <tr>
                      <td>Doenças respiratórias</td>
                      <td>Afetam os pulmões e as vias respiratórias.</td>
                  </tr>
                  <tr>
                      <td>Doenças musculoesqueléticas</td>
                      <td>Afetam os músculos, ossos e articulações.  </td>
                  </tr>
                  <tr>
                      <td>Doenças genéticas</td>
                      <td>Causadas por mutações no DNA. </td>
                  </tr>
              </table>
          </section>
      </div>
      </div>
          
        </>
     
    )

}
