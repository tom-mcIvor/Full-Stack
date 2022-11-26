import request from 'superagent'

const fruit_api = 'http://localhost:3000/api/v1/'

export function getFruits() {
  return request.get(`${fruit_api}fruits/`).then((res) => {
    return res.body.fruits
  })
}
