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
  console.log('hello')
  const fruit = req.params.fruit

  db.addFruit(fruit)

  res.sendStatus(200)
})

module.exports = router
