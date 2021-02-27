const express = require('express')
const bodyParser = require('body-parser')
const mountRoutes = require('./routes')

const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mountRoutes(app)


app.listen(port, () => console.log(`Kladd API listening on port ${port}!`))
