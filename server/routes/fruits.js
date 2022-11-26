const express = require('express')
const fs = require('node:fs/promises')
const db = require('../db/fruits')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFruits()
    .then((results) => {
      res.json({ fruits: results.map((fruit) => fruit.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/:fruit', (req, res) => {
  console.log('hello')
  const fruit = req.params.fruit

  // fs.writeFile(path.join(__dirname, 'data.json'), fruit)
  //   .then(() => {
  //     res.status(200).json({ message: '200 gets go!', fruit })
  //   })
  //   .catch((e) => console.log(e))
})

module.exports = router
