const connection = require('./connection')

function getFruits(db = connection) {
  return db('fruit').select()
}

function addFruit(fruit, db = connection) {
  db('fruit').insert({
    name: fruit,
  })
}

module.exports = {
  getFruits,
  addFruit,
}
