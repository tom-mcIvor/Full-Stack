const express = require('express')
const fs = require('fs')
const path = require('path')

const filename = path.join(__dirname, './data.json')

const router = express.Router()

// http://localhost:3000/api/v1/files
router.get('/', (req, res) => {
  fs.readFile(filename, 'utf8', (e, d) => {
    if (e) res.statusCode(500)
    else res.json(JSON.parse(d))
  })
})

router.post('/:name', (req, res) => {
  const name = req.params.name

  fs.writeFile(filename, JSON.stringify({ name }), (e) => {
    if (e) res.statusCode(500)
    else res.statusCode(200)
  })
})

module.exports = router
