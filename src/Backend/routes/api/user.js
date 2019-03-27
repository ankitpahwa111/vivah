const { Router } = require('express');
const { userAuthViaToken } = require('../../middlewares/auth')
const { getUser } = require('../../controllers/UserController')
const { makeFavourite } = require('../../controllers/favouriteController')
const { addPhoto, getPhotos } = require('../../controllers/photoController')
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
                username: req.query.username,
                gender: req.query.username
            }
            makeFavourite(firstUser, secondUser)
            res.send('added to favourites')
        } catch (err) {
            res.status(403).send({
                errors: {
                    body: [err.message]
                }
            })
        }


    }
    else {
        res.send('Only for logged in user')
    }
})
route.post('/addPhoto', userAuthViaToken, (req, res) => {
    if (req.body.email) {
        try {
            const user = {
                username: req.body.username,
                gender: req.body.gender
            }
            addPhoto(req.body.url, user).then(() => {
                res.send('added the photo')
            })
        } catch (err) {
            res.status(403).send({
                errors: {
                    body: [err.message]
                }
            })
        }


    }
    else {
        res.send('Only for logged in user')
    }
})
route.get('/getPhotos', userAuthViaToken, (req, res) => {
    if (req.body.email) {
        try {
            const user = {
                username: req.body.username,
                gender: req.body.gender
            }
            getPhotos(user).then((photos) => {

                const photoArray = photos.map((photo) => {
                    return photo.get().url
                })
                res.send(photoArray)
            })
        } catch (err) {
            res.status(403).send({
                errors: {
                    body: [err.message]
                }
            })
        }


    }
    else {
        res.send('Only for logged in user')
    }
})
module.exports = route;