import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Eventos from './pages/eventos';
import Home from './pages/home';
import Login from './pages/login';

function Routers(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/eventos" component={Eventos}/>
        </BrowserRouter>
    );
}

export default Routers;