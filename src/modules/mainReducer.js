import {
  ADD_PLAYER,
  INIT
} from 'modules/actions'

const initialState = {
  players: [],
  playerRankings:
    {
      '8ball':
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
      'tableTennis':
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
