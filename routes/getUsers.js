var express = require('express')
var router = express.Router()
var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers()
    .then(function (users) {
      res.json({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
