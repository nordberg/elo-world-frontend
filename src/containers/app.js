import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from 'containers/home'
import Players from 'containers/players'
import { hot } from 'react-hot-loader'
import { getElo } from "../modules/actions";

const Header = () => (
  <header>
    <div className="header-content">
      <Link to="/" className="main-logo">elo world</Link>
      <Link to="/players" className="header-link">Manage players</Link>
    </div>
  </header>
)

class App extends React.Component {

  componentDidMount() {
    getElo('1')
    getElo('2')
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/players" component={Players}/>
        </main>
      </div>
    )
  }
}

export default hot(module)(App)
