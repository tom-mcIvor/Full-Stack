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
router.post('/:id', (req, res) => {
  fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(req, null, 2))
    .then(() => res.status(500))
    .catch((e) => console.log(e))
})

module.exports = router
