import {
  ADD_PLAYER,
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

function mainReducer(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_PLAYER: {
      return handleAddPlayer(state, payload)
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
