import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import AddEmotion from './pages/AddEmotion'
import Signup from './pages/Signup'
import api from '../api'
import logo from '../logo.svg'
import ShowEmotions from './pages/ShowEmotions'
import ShowActivities from './pages/ShowActivities'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MERN Boilerplate</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/countries">Countries</NavLink>
          <NavLink to="/add-country">Add country</NavLink>
          <NavLink to="/add-emotion">Add Emotion</NavLink>
          <NavLink to="/show-emotions">Show Emotion</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/countries" component={Countries} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/add-emotion" component={AddEmotion} />
          <Route path="/show-emotions" component={ShowEmotions} />
          <Route path="/show-activity" component={ShowActivities} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}
