import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from './components/pages/index'
import Clientes from './components/pages/Clientes/listagem';
import Animais from './components/pages/Animais/listagem';
import Fornecedor from './components/pages/Fornecedor/listagem';
import Produtos from './components/pages/Produtos/listagem';
 
function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route peth="/clientes" component={Clientes} />
            <Route peth="/animais" component={Animais} />
            <Route peth="/fornecedor" component={Fornecedor} />
            <Route peth="/produtos" component={Produtos} />
        </Switch>        
    )
}

export default Routes;