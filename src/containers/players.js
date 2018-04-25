import React from 'react'

class AddPlayerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''}
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }

  addPlayer = (event) => {
    console.log(this.state)
    this.setState({name: ''})
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

const Players = () => (
  <div>
    <h1>Manage players</h1>
    <AddPlayerForm/>
  </div>
)

export default Players
