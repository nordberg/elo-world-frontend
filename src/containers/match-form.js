import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Select from 'components/player-select'
import NumberField from 'components/number-field'
import { getPlayers, submitMatch } from 'modules/actions'

const sports = [{
  label: '8-ball',
  value: 2,
}, {
  label: 'Table tennis',
  value: 1,
}]

class MatchFormContainer extends Component {
  componentDidMount() {
    this.props.fetchPlayers()
  }

  handleSubmit = (values) => {
    this.props.createMatch(values)
  }

  render() {
    return (
      <ConnectedMatchForm players={this.props.players} onSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state) => ({
  players: state.mainReducer.players.map(user => ({
    label: user.name,
    value: user.id,
  }))
})

const mapDispatchToProps = (dispatch) => ({
  fetchPlayers: () => { dispatch(getPlayers() )},
  createMatch: (payload) => { dispatch(submitMatch(payload) )}
})


const MatchForm = ({ handleSubmit, players, ...props }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Select name="team_1" label="Player 1" options={players} />
      <Select name="team_2" label="Player 2" options={players} />
      <Select name="sport" label="Sport" options={sports} />
      <NumberField name="score_1" label="Player 1 Score" />
      <NumberField name="score_2" label="Player 2 Score" />
      <button type="submit">Submit</button>
    </form>
  )
}

const ConnectedMatchForm = reduxForm({
  form: 'match'
})(MatchForm)

export default connect(mapStateToProps, mapDispatchToProps)(MatchFormContainer)
