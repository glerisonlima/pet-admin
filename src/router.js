import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from './components/pages/index'
import Clientes from './components/pages/Clientes/listagem';
 
function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route peth="/clientes" component={Clientes} />
        </Switch>        
    )
}

export default Routes;