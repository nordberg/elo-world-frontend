import {
  ADD_PLAYER,
  GET_PLAYERS_SUCCESS,
  GET_ELO_SUCCESS,
  INIT
} from 'modules/actions'

const initialState = {
  players: [],
  playerRankings:
    {
      '1':
        [
          {
            name: 'Foo von Bar',
            elo: 2200
          },
          {
            name: 'Pooldude',
            elo: 500
          }
        ],
      '2':
        [
          {
            name: 'Mr. Placeholder',
            elo: 1200
          },
          {
            name: 'Ping Pong',
            elo: 42
          },
          {
            name: 'Lolfi Golfi',
            elo: 1
          },
          {
            name: 'Golfi Lolfi',
            elo: 1
          }
        ]
    }
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

function handleEloSuccess(state, payload) {
  console.log(payload)
  const { elo } = payload
  return {
    ...state,
    elo
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
    case GET_ELO_SUCCESS: {
      return handleEloSuccess(state, payload)
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
