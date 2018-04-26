import api from 'api'

export function fetchElo(sportId) {
  return api('/elo/' + sportId + '/')
}
