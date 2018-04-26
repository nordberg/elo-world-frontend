import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPlayers, getElo } from "modules/actions";

const RankingItem = (props) => {
  const {name, elo} = props.ranking
  const rank = props.index + 1
  const rowClass = "ranking-row" + (rank % 2 === 0 ? " even-row" : "")

  return (
    <div className={rowClass}>
      <div>{rank}</div>
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
  '1': 'Table tennis',
  '2': 'Eight-ball'
 }

class Ranking extends Component {

  componentDidMount() {
    this.props.fetchPlayers()
    this.props.getEloById('1')
    this.props.getEloById('2')
  }
  render() {
    const rankingItems = this.props.playerRankings.map((r, i) => (
      <RankingItem index={i} ranking={r} key={r.name}/>
    ))

    return (
      <div className="ranking">
        <h2>{sportNameById[this.props.sport]}</h2>
        <div className="ranking-table">
          <RankingHeader/>
          {rankingItems}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {playerRankings: state.mainReducer.playerRankings[ownProps.sport]}
}

const mapDispatchToProps = (dispatch) => ({
  fetchPlayers: () => dispatch(getPlayers()),
  getEloById: (id) => dispatch(getElo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
