import Logo from '../../assets/images/escudo_virus.webp';
// import './style2.css';

import Header from '../Header';

export default function Formulario(){

    return(<>
        
        <Header></Header>

        <div className="pagina_form">
        <p id="subtitulo">Complete com suas Informações:</p>

        <form class="form_cadastro" method="get">


            <div class="form-group">
                <label for="exampleInputEmail1">Nome</label>
                <input type="text" class="form-control" placeholder="Nome"/>
            </div><br/>

            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
            </div><br/>

            <div class="form-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" class="form-control" name="senha" placeholder="Senha"/>
            </div><br/>
                    
            <div class="form-group">
                <label for="Data">Data de Nascimento: </label>
                <input type="datetime-local" class="form-control" name="bdaytime" id="Data"/>
            </div> <br/>

            <div class="form-group">
                <label for="sexo">Sexo:</label>
                {/* <!-- Tag select para inlclusão de dados de forma pre definida --> */}
                <select id="sexo" name="sexo" class="form-control">
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
                </select>
            </div><br/>

            <div class="form-group">
                <label for="Arquivos">Envie seus documentos: </label>
                <input type="file" name="arquivos" multiple id="Arquivos" class="form-control"/>
            </div><br/>
            
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Aceito os termos de uso</label>
            </div><br/>
          
            <button type="submit" class="botao_form btn btn-primary">Enviar</button>
                
        </form>
           
        </div>

        
        </>
     
    )

}
