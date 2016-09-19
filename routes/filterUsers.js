var express = require('express')
var router = express.Router()
var db = require('../db')

router.get('/', function (req, res) {
  db.filterUsers(req.query.search)
  .then(function (users) {
    res.json(users)
  })
  .catch(function (err) {
    res.status(404).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
