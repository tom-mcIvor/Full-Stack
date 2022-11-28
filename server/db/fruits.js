const connection = require('./connection')

function getFruits(db = connection) {
  return db('fruit').select()
}
function getFruitById(id, db = connection) {
  return db('fruit').select().where('id', id).first()
}

function deleteFruit(id, db = connection) {
  db('fruit')
    .where('id', id)
    .del()
    .then((r) => console.log(r))
    .catch((e) => console.error(e))
}
function updateFruit(id, name, db = connection) {
  db('fruit')
    .where('id', id)
    .update({ name })
    .then((r) => console.log(r))
    .catch((e) => console.error(e))
}

function addFruit(fruit, db = connection) {
  //`INSERT INTO fruit (name) VALUES (${fruit})`

  return db('fruit').insert({
    name: fruit,
  })
  // .then((r) => console.log(r))
  // .catch((e) => console.error(e))
}

module.exports = {
  getFruits,
  addFruit,
  deleteFruit,
  updateFruit,
  getFruitById,
}
