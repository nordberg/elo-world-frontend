import React from 'react'
import Ranking from 'containers/ranking'

const Home = () => (
  <div>
    <h1>elo world</h1>
    <div className="rankings">
      <Ranking sport="8ball"/>
      <Ranking sport="tableTennis"/>
    </div>
  </div>
)

export default Home
