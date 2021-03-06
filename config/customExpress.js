const express = require('express')
const cors = require('cors')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cors())
    consign()
        .include('controllers')
        .into(app)
    return app
}
