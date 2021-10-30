import React, { Component } from 'react'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import SignUp from './pages/signUp/signUp.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Route path='/login' component={Login}></Route>
            <Route path='/signUp' component={SignUp}></Route>
            <Redirect to='/login'></Redirect>
        </BrowserRouter>
      </div>
    )
  }
}