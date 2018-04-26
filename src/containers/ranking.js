import React from 'react'
import { connect } from 'react-redux'

const RankingItem = (props) => {
  const {name, elo} = props.ranking

  return (
    <div className="ranking-row">
      <div>{props.index + 1}</div>
      <div>{name}</div>
      <div>{elo}</div>
    </div>
  )
}

const RankingHeader = (props) => (
  <div className="ranking-row ranking-header">
    <div>Rank</div>
    <div>Name</div>
    <div>Elo</div>
  </div>
)

const sportNameById = {
  '8ball': '8-ball',
  'tableTennis': 'Table tennis'
}

const Ranking = (props) => {
  const rankingItems = props.playerRankings.map((r, i) => (
    <RankingItem index={i} ranking={r} key={r.name}/>
  ))

  return (
    <div className="ranking">
      <h2>{sportNameById[props.sport]}</h2>
      <div className="ranking-table">
        <RankingHeader/>
        {rankingItems}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {playerRankings: state.mainReducer.playerRankings[ownProps.sport]}
}

export default connect(mapStateToProps)(Ranking)
