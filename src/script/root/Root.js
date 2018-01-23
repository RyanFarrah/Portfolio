import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import style from 'Style/app.scss' // eslint-disable-line

import Nav from 'Components/Nav'
import PageNotFound from 'Pages/PageNotFound'
import Home from 'Pages/Home'
import Client from 'Pages/Project'

const Root = () =>
<Router>
  <div className='container'>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/work/:slug' component={Client} />
      <Route path='/lol' component={PageNotFound} />
      <Route path='/about' component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
</Router>

export default Root
