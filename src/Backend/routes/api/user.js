const { Router } = require('express');
const { userAuthViaToken } = require('../../middlewares/auth')
const { getUser } =require('../../controllers/UserController')
const route = Router()
route.get('/', userAuthViaToken, (req, res) => {
    if (req.body.email) {
        getUser(req.query.username).then((user) => {
            res.send(user)
        })
    }
    else{
        res.send('Only for logged in user')
    }
})
module.exports = route;