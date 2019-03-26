const { Router } = require('express');
const { userAuthViaToken } = require('../../middlewares/auth')
const { getUser } = require('../../controllers/UserController')
const { makeFavourite } = require('../../controllers/favouriteController')
const route = Router()
route.get('/', userAuthViaToken, (req, res) => {
    if (req.body.email) {
        getUser(req.query.username).then((user) => {
            res.send(user)
        })
    }
    else {
        res.send('Only for logged in user')
    }
})
route.get('/addFavourite', userAuthViaToken, (req, res) => {
    if (req.body.email) {
        try {
            const firstUser = {
                username: req.body.username,
                gender: req.body.gender
            }
            const secondUser = {
                username : req.query.username,
                gender : req.query.username
            }
            makeFavourite(firstUser,secondUser)
            res.send('added to favourites')
        } catch(err){
            res.status(403).send({
                errors: {
                  body: [ err.message ]
                }
              })
        }
        
        
    }
    else {
        res.send('Only for logged in user')
    }
})
module.exports = route;