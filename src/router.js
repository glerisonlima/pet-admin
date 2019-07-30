import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from './components/pages/index'
import Clientes from './components/pages/Clientes/listagem';
import ClientesAdd from './components/pages/Clientes/Add';
import Animais from './components/pages/Animais/listagem';
import AnimaisAdd from './components/pages/Animais/Add';
import Fornecedor from './components/pages/Fornecedor/listagem';
import Produtos from './components/pages/Produtos/listagem';
 
function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/clientes" component={Clientes} />
            <Route path="/clientesAdd" component={ClientesAdd} />
            <Route path="/animais" component={Animais} />
            <Route path="/animaisAdd" component={AnimaisAdd} />
            <Route path="/fornecedor" component={Fornecedor} />
            <Route path="/produtos" component={Produtos} />
        </Switch>        
    )
}

export default Routes;