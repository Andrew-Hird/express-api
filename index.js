var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var index = require('./routes/index')

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', index.get)

// var getUsers = require('./routes/getUsers')
// app.use('/users', getUsers)

var getUser = require('./routes/getUser')
app.use('/user', getUser)

var deleteUser = require('./routes/deleteUser')
app.use('/user', deleteUser)

var updateUser = require('./routes/updateUser')
app.use('/user', updateUser)

var addUser = require('./routes/addUser')
app.use('/user', addUser)

var filterUsers = require('./routes/filterUsers')
app.use('/users', filterUsers)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
