import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../../assets/style/global.css';
import './style.css'
import Header from '../../componentes/header';
import Input from '../../componentes/input';
import Button from '../../componentes/button';
import Footer from '../../componentes/footer';

function Login(){

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = () => {
        const login = {
            email: email,
            senha: senha
        }
    
    fetch('http://localhost:5000/api/conta/login', {
     method: 'POST',
     body: JSON.stringify(login),
     headers: {
        'content-type' : 'application/json'
     }
    })
    .then(response => response.json())
    .then( dados => {
        localStorage.setItem('token', dados.token);
        history.push('/');
    })
    .catch(erro => console.error(erro));
}
    return(
        <div>
            <Header title="Acesse todos os Eventos"/>
            
            <div className="container-login">
                <form onSubmit={event =>{
                    event.preventDefault();
                    login();
                }}>
                <h1>Login</h1>
                    <Input name="email" label="E-mail" onChange={e=> setEmail(e.target.value)} />
                    <Input type="password" name="senha" label="Senha" onChange={e=> setSenha(e.target.value)}/>
                    <Button value="Enviar"/>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;