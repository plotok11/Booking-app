const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('This is rooms Endpoint')
})

router.get("/detail-room", (req, res) => {
    res.send('This is detail rooms Endpoint')
})

module.exports = router