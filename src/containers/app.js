import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from 'containers/home'
import Players from 'containers/players'

const Header = () => (
  <header>
    <div className="header-content">
      <Link to="/" className="main-logo">elo world</Link>
      <Link to="/players" className="header-link">Manage players</Link>
    </div>
  </header>
)

const App = () => (
  <div>
    <Header/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/players" component={Players} />
    </main>
  </div>
)

export default App
