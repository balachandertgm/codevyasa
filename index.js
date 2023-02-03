'use strict'
const express = require('express');
const bodyParser = require('body-parser')
const userComponent = require('./components/user/user');
const authorComponent = require('./components/author/author');
const authentication = require('./components/middleware/jwt_auth');
const { responseJSONFormat } = require('./components/util');


const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/info', (request, response) => {
    let data = { "info": "Some information about the <b>company</b>." }
    response.send(responseJSONFormat(true, data))
})

app.get('/users', userComponent.getUsers)
app.post('/register', userComponent.saveUser)
app.post('/login', userComponent.userLogin)
app.get('/profile', authentication, userComponent.userProfile)
app.delete('/logout', authentication, userComponent.userLogout)

app.get('/author', authentication, authorComponent.getRandomAgent)
app.get('/quote', authentication, authorComponent.getAgentRandomQuote)

var server = app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

module.exports = server
