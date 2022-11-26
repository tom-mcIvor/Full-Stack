import request from 'superagent'

const fruit_api = 'http://localhost:3000/api/v1/'

export function getFruits() {
  return request.get(`${fruit_api}fruits/`).then((res) => {
    return res.body.fruits
  })
}

export function createFruit(fruit) {
  return request
    .post(`${fruit_api}fruits/${fruit.name}`)
    .then(() => true)
    .catch((e) => console.error(e))
}

export function deleteFruit(fruit) {
  return request
    .delete(`${fruit_api}fruits/${fruit.id}`)
    .then(() => true)
    .catch((e) => console.error(e))
}
