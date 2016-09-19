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
app.get('/users', index.getJson)
app.get('/user/:id', index.getUser)
app.delete('/user/:id', index.deleteUser)
app.put('/user/:id', index.updateUser)
app.post('/user', index.addUser)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
