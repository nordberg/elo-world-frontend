export const ADD_PLAYER = 'ELO_WORLD/ADD_PLAYER'
export const INIT = 'ELO_WORLD/INIT'

export function addPlayer(name) {
  return {type: ADD_PLAYER, payload: {name: name}}
}

export function initState() {
  return {type: INIT}
}
