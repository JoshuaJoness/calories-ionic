import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Gender from './Gender'
import Home from './Home'
import Age from './Age'
import HeightAndWeight from './HeightAndWeight'
import ActivityLevel from './ActivityLevel'
import Greeting from './Greeting'


class Routes extends React.Component {
	render () {
  return (
    <BrowserRouter>
      <Switch>
				<Route path='/stats' component={HeightAndWeight} />
				<Route path='/activity' component={ActivityLevel} />
        <Route path='/gender' component={Gender} />
				<Route path='/age' component={Age} />
				
				<Route path='/' component={Greeting} />
      </Switch>
    </BrowserRouter>
  )
}
}

export default Routes
