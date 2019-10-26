import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Questions from './Questions'
import Home from './Home'
import HeightAndWeight from './HeightAndWeight'
import ActivityLevel from './ActivityLevel'
import Greeting from './Greeting'
import Results from './Results'

class Routes extends React.Component {
	render () {
  return (
    <BrowserRouter>
      <Switch>
				<Route path='/stats' component={HeightAndWeight} />
				<Route path='/activity' component={ActivityLevel} />
        <Route path='/questions' component={Questions} />
				<Route path='/results' component={Results} />


				<Route path='/' component={Greeting} />
      </Switch>
    </BrowserRouter>
  )
}
}

export default Routes
