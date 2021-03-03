import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import {Home} from "./Views/Home/Home"


const App = () => {

  return (
      <Switch>
        <Route component={Home}/>
      </Switch>
  )
}

export default App