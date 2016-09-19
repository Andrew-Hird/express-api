var express = require('express')
var router = express.Router()
var db = require('../db')

router.put('/:id', function (req, res) {
  db.updateUser(req.params.id, req.body)
  .then(function (update) {
    res.status(204)
  })
  .catch(function (err) {
    res.status(404).send('user update failed')
  })
})


module.exports = router
