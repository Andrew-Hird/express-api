var express = require('express')
var router = express.Router()
var db = require('../db')


router.delete('/:id', function (req, res) {
  db.deleteUser(req.params.id)
  .then(function (deleteCount) {
    res.status(200).send('user deleted')
  })
  .catch(function (err){
    res.status(404).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
