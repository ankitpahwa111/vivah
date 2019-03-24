const { Router } = require('express');
const { userAuthViaToken } = require('../../middlewares/auth')
const route = Router()
route.get('/', userAuthViaToken, (req, res) => {
    if (req.body.email) {
        res.send(req.body)
    }
})
module.exports = route;