const connection = require('./connection')

function getFruits(db = connection) {
  return db('fruit').select()
}
function deleteFruit(id, db = connection) {
  db('friut').del().where({ id })
}

function addFruit(fruit, db = connection) {
  //`INSERT INTO fruit (name) VALUES (${fruit})`

  return db('fruit')
    .insert({
      name: fruit,
    })
    .then((r) => console.log(r))
    .catch((e) => console.error(e))
}

module.exports = {
  getFruits,
  addFruit,
  deleteFruit,
}
