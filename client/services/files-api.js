import request from 'superagent'

const fruit_api = 'http://localhost:3000/api/v1/'

export function getFile() {
  return request.get(`${fruit_api}files/`).then((res) => {
    return res.body
  })
}

export function updateFile(name) {
  return request
    .post(`${fruit_api}files/${name}`)
    .then(() => true)
    .catch((e) => console.error(e))
}
