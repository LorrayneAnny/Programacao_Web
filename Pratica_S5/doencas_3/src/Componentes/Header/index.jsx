import Logo from '../../assets/images/escudo_virus.webp';
import { Link } from 'react-router-dom';

export default function Header(){

    return(<>
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={Logo}alt="logo" width="50" height="50" class="d-inline-block align-text-top" id="logo" />
                        Doenças
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link" href="index.html">Introdução</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/form"><a class="nav-link" href="index2.html">Formulário</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/tabelas"><a class="nav-link" href="index3.html">Tabelas</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/imagens"><a class="nav-link" href="index4.html">Imagens</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/menu"><a class="nav-link" href="index5.html">Menu</a></Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Busque aqui" aria-label="Search" />
                            <button class="btn btn-primary" type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    
    </>)

}