const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller')
require('dotenv').config();
let { SERVER_PORT, CONNECTION_STRING } = process.env;
const baseURL = '/api'

const app = express();
app.use(bodyParser.json());


app.get(`${baseURL}/get-all`, controller.getAll)
app.post(`${baseURL}/create`, controller.create)
app.delete(`${baseURL}/delete/:id`, controller.delete)


massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection);
    app.listen(SERVER_PORT, () => {
        console.log('Welcome Adrian Tepes')
    })
})
