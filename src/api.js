export default function api(endpoint, options = {}) {
  const url = '/api' + endpoint
  return fetch(url).then(response => {
    return response.json()
  })
}

export function post(endpoint, data) {
  const url = '/api' + endpoint
  const json = JSON.stringify(data)
  console.log(json)
  return fetch(url, {
    body: json,
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(response => response.json())
}
