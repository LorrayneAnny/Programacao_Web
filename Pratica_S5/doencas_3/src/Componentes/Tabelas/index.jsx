import Logo from '../../assets/images/escudo_virus.webp';
// import './style2.css';

import Header from '../Header';

export default function Tabelas(){

    return(<>
        
    <Header></Header>

    <div class="container-fluid mt-5">
      <h1 class="text-center">Doenças</h1>

      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th colspan="3" class="text-center">Transtornos Mentais</th>
          </tr>
          <tr>
            <th>Transtorno Mental</th>
            <th>Tratamento</th>
            <th>Medicamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Depressão</td>
            <td>Psicoterapia, antidepressivos</td>
            <td>Fluoxetina, Sertralina</td>
          </tr>
          <tr>
            <td>Transtorno Obsessivo Compulsivo (TOC)</td>
            <td>Terapia comportamental, medicamentos</td>
            <td>Clomipramina, Fluvoxamina</td>
          </tr>
          <tr>
            <td>Transtorno Bipolar</td>
            <td>Estabilizadores de humor, antipsicóticos</td>
            <td>Lítio, Quetiapina</td>
          </tr>
        </tbody>
    </table>

       {/* <!-- <h2>Tabela Tipos de Cancêr</h2> --> */}
    <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
              <td colspan="3" class="text-center">Tipos de Câncer</td>
          </tr>
          <tr>
            <th>Câncer</th>
            <th>Tratamento</th>
            <th>Medicamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Câncer de Mama</td>
            <td>Cirurgia, Radioterapia, Quimioterapia</td>
            <td>Tamoxifeno, Trastuzumab, Doxorrubicina</td>
          </tr>
          <tr>
            <td>Câncer de Próstata</td>
            <td>Cirurgia, Radioterapia, Terapia Hormonal</td>
            <td>Docetaxel, Cabazitaxel e Mitoxantrona</td>
          </tr>
          <tr>
              <td>Câncer de Pele</td>
              <td>Cirurgia, Radioterapia, Quimioterapia</td>
              <td>Dacarbazin, Temozolomida e Nab-paclitaxel</td>
          </tr>
          </tbody>
      </table>

      {/* <!-- <h2>Tabela Doenças Contagiosas</h2> --> */}
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
              <td colspan="3" class="text-center">Doenças Contagiosas</td>
          </tr>
          <tr>
            <th>Doença Contagiosa</th>
            <th>Tratamento</th>
            <th>Medicamento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Covid-19</td>
            <td>Isolamento, Hidratação, Oxigenoterapia</td>
            <td>Remdesivir, Dexametasona, Ivermectina</td>
          </tr>
          <tr>
            <td>Influenza (Gripe)</td>
            <td>Repouso, Hidratação</td>
            <td>Paxlovid, Remdesivir e Sotrovimave</td>
          </tr>
          </tbody>
      </table>

      </div>
        
        </>
     
    )

}
