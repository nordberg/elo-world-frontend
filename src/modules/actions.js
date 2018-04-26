import { fetchPlayers, createMatch } from 'modules/players/requests'
import { fetchElo } from 'modules/elo/requests'

export const GET_PLAYERS_SUCCESS = 'ELO_WORLD/GET_PLAYERS_SUCCESS'
export const GET_ELO_SUCCESS = 'ELO_WORLD/GET_ELO_SUCCESS'
export const CREATE_MATCH_SUCCESS = 'ELO_WORLD/CREATE_MATCH_SUCCESS'
export const ADD_PLAYER = 'ELO_WORLD/ADD_PLAYER'
export const INIT = 'ELO_WORLD/INIT'

export function addPlayer(name) {
  return {type: ADD_PLAYER, payload: {name: name}}
}

export function getPlayers() {
  return (dispatch) => {
    console.log("hej")
    fetchPlayers().then(response => {
      console.log("response", response)
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

export function getElo(sportId) {
  return (dispatch) => {
    fetchElo(sportId).then(response => {
      dispatch(getEloSuccess(response))
    }
  }
}

export function submitMatch(payload) {
  return (dispatch) => {
    console.log("payload", payload)
    const data = {
      ...payload,
      score_1: parseInt(payload.score_1),
      score_2: parseInt(payload.score_2),
    }
    console.log("data", data)
    createMatch(data).then(response => {
      dispatch(createMatchSuccess(response))
    })
  }
}

function getEloSuccess(payload) {
  return {
    type: GET_ELO_SUCCESS,
  }
}

function createMatchSuccess(payload) {
  return {
    type: CREATE_MATCH_SUCCESS,
    payload,
  }
}

export function initState() {
  return {type: INIT}
}
