import api from 'api'

export function fetchElo(sportId) {
  console.log("elo api", sportId)
  return api('/elo/' + sportId + '/')
}
