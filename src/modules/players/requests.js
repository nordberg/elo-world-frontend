import api, { post } from 'api'

export function fetchPlayers() {
  return api('/users/')
}

export function createMatch(payload) {
  return post('/matches/', payload)
}
