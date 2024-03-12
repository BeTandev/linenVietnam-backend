const express = require('express')
const cors = require('cors')
const initRoutes = require('./src/routes')
require('dotenv').config()
require('./connection_databse')

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initRoutes(app)

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT, () => {
    console.log('Server is running on ' + listener.address().port)
})
