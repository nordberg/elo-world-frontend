import {
  ADD_PLAYER,
  GET_PLAYERS_SUCCESS,
  INIT
} from 'modules/actions'

const initialState = {
  players: []
}

function handleAddPlayer(state, payload) {
  const {name} = payload
  return {
    ...state,
    players: [...state.players, name]
  }
}

function handleGetPlayersSuccess(state, payload) {
  const { players } = payload
  return {
    ...state,
    players
  }
}

function mainReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_PLAYER: {
      return handleAddPlayer(state, payload)
    }
    case GET_PLAYERS_SUCCESS: {
      return handleGetPlayersSuccess(state, payload)
    }
    case INIT: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default mainReducer
