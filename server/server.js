'use strict'

const express = require('express')
const app = express()
const port = 80;

app.use(express.static(__dirname + '/dist'))

app.listen(port, () => {
    console.log('paredros store running on port ' + port)
})
