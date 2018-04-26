import { fetchPlayers } from 'modules/players/requests'

export const GET_PLAYERS_SUCCESS = 'ELO_WORLD/GET_PLAYERS_SUCCESS'
export const ADD_PLAYER = 'ELO_WORLD/ADD_PLAYER'
export const INIT = 'ELO_WORLD/INIT'

export function addPlayer(name) {
  return {type: ADD_PLAYER, payload: {name: name}}
}

export function getPlayers() {
  return (dispatch) => {
    fetchPlayers().then(response => {
      dispatch(getPlayersSuccess(response))
    })
  }
}

function getPlayersSuccess(payload) {
  return {
    type: GET_PLAYERS_SUCCESS,
    payload,
  }
}

export function initState() {
  return {type: INIT}
}
