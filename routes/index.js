var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  getJson: getJson,
  getUser: getUser,
  deleteUser: deleteUser
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getJson (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.json({ users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getUser (req, res) {
  knex('users')
  .select()
  .where('id', '=', req.params.id)
  .then(function (user) {
    res.json({ user: user })
  })
  .catch(function (err) {
    res.status(404).send('DATABASE ERROR: ' + err.message)
  })
}

function deleteUser (req, res) {
  knex('users')
  .del()
  .where('id', '=', req.params.id)
  .then(function (deleteCount) {
    res.status(200).send('user deleted')
  })
  .catch(function (err){
    res.status(404).send('DATABASE ERROR: ' + err.message)
  })
}
