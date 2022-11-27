const express = require('express')
const db = require('../db/fruits')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFruits()
    .then((results) => {
      res.json({ fruits: results })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/:fruit', (req, res) => {
  const fruit = req.params.fruit

  db.addFruit(fruit)
  console.log('adding fruit', fruit)

  res.sendStatus(200)
})

router.delete('/:fruit_id', (req, res) => {
  const id = req.params.fruit_id

  db.deleteFruit(id)
  console.log('deleting fruit', id)

  res.sendStatus(200)
})

router.put('/:fruit_id/:name', (req, res) => {
  const id = req.params.fruit_id
  const name = req.params.name

  db.updateFruit(id, name)
  console.log('update fruit', id)

  res.sendStatus(200)
})

module.exports = router
