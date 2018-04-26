import React from 'react'
import Ranking from 'containers/ranking'

const Home = () => (
  <div>
    <h1>elo world</h1>
    <div className="rankings">
      <Ranking sport="1"/>
      <Ranking sport="2"/>
    </div>
  </div>
)

export default Home
