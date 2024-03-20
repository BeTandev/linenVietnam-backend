import express from 'express'
import cors from 'cors'
import initRoutes from './src/routes'
require('dotenv').config()
require('./connection_databse')

const app = express()

app.use(cors({
    // origin: process.env.CLIENT_URL,
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


initRoutes(app)

const PORT = process.env.PORT || 8888

const listener = app.listen(PORT, () => {
    console.log('Server is running on ' + listener.address().port)
})
