var express = require('express')
var router = express.Router()
var db = require('../db')

router.get('/:id', function (req, res) {
  db.getUser(req.params.id)
  .then(function (user) {
    res.json({ user: user })
  })
  .catch(function (err) {
    res.status(404).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
