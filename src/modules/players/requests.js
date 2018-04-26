import api from 'api'

export function fetchPlayers() {
  return api('/users')
}
