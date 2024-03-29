'use client';
import Head from 'next/head';
import Link from 'next/link';

import Topo from './componentes/Topo';
import Form from './componentes/Form';

import style from '../../styles/Cadastro.module.css';

function Cadastro() {

  return (
    <div className={style.Cadastro}>

      <Head>
        <title>Up Life</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- Trazendo Bootstrap para projeto --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </Head>

      

      <div className='card' id={style.card_cadastro}>
        <Topo/>
        <Form/>
      </div>

    </div>
  )
  
}

export default Cadastro;
