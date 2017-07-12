const express = require('express')
const router = express.Router()

const getRandomPiece = require('../tetris/pieces').getRandomPiece

router.post('/nextpiece', function (req, res) {
  const piece = getRandomPiece()
  res.send({piece})
})

module.exports = router
