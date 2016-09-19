var express = require('express')
var router = express.Router()
var db = require('../db')

router.post('/', function (req, res) {
  db.addUser(req.body)
  .then(function (add) {
    res.status(201).send('user created')
  })
  .catch(function (err) {
    res.status(404).send('user was not added')
  })
})


module.exports = router
