export default function api(endpoint, options = {}) {
  const url = '/api' + endpoint
  return fetch(url).then(response => {
    return response.json()
  })
}
