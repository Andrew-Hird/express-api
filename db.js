var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
  addUser: addUser,
  filterUsers: filterUsers
}

function getUsers() {
  return knex('users')
    .select()
}

function getUser(id) {
  return knex('users')
    .select()
    .where('id', '=', id)
}

function deleteUser(id) {
  return knex('users')
  .del()
  .where('id', '=', id)
}

function updateUser(id, body) {
  return knex('users')
  .where('id', '=', id)
  .update({
    name: body.name,
    email: body.email
  })
}

function addUser(body) {
  return knex('users')
    .insert({
      name: body.name,
      email: body.email
    })
}

function filterUsers(name) {
  return knex('users')
  .select()
  .where('name', '=', name)
}
