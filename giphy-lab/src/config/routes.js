import React from 'react';
//import { Switch, Route } from 'react-router-dom'
import Home from './src/Home'

export default (
    <Switch>
    	<Route exact path='/' component={ Home }/>
      	<Route path='/todos' component={ TodosContainer}/>
        <h1>Hello World</h1>
    </Switch>
)