import React, {useState, useEffect} from 'react';
import Header from '../../componentes/header';
import '../../assets/style/global.css';

function Eventos(){

    const [filme, setFilme] = useState('');
    const [filmes, setFilmes] = useState([]);
    const [idFilme, setIdFilme] = useState(0);

    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listarFilmes();
        listarGenero();
    }, [])

    return(
        <div>
            <Header title="Acesse todos os eventos!"/>
            <h1>Eventos</h1>
        </div>
    )
}

export default Eventos;