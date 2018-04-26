import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from "../modules/actions";

class AddPlayerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''}
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  addPlayer = (event) => {
    if (this.state.name.length > 0){
      this.props.onAddButtonClick(this.state.name)
      this.setState({name: ''})
    }
  }

  render() {
    return (
      <div>
        <div>Add player</div>
        <input onChange={this.handleChange} value={this.state.name} className="player-input"/>
        <button onClick={this.addPlayer}>Add</button>
      </div>
    )
  }
}

function PlayerList(props) {
  const listItems = props.players.map((player) => (
    <li key={player}>{player}</li>
  ))
  return (
    <div>
      <h3>Players</h3>
      {props.players.length > 0 ? (
        <ul>{listItems}</ul>
      ) : (
        <div>No players added.</div>
      )}
    </div>
  )
}

const Players = (props) => (
  <div>
    <h1>Manage players</h1>
    <AddPlayerForm onAddButtonClick={props.onAddButtonClick}/>
    <PlayerList players={props.players}/>
  </div>
)

const mapStateToProps = state => {
  return {players: state.mainReducer.players}
}

const mapDispatchToProps = dispatch => {
  return {
    onAddButtonClick: name => {
      dispatch(addPlayer(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)
