const { Router } = require('express');
const {CreateUser,login} = require('../../controllers/AuthController');
const { userAuthViaToken } = require('../../middlewares/auth')
const { getUsers } = require('../../controllers/UserController')
const route = Router()
route.get('/',userAuthViaToken, (req, res) => {
    console.log(req.query)
    if(req.body.email){
         let ageRange= {
             lowerLimit : req.query.lowerLimit,
             upperLimit : req.query.upperLimit
         }
         getUsers(ageRange,req.query.religion,req.body.gender).then((users)=>{
             res.send(users)
         })
    }
    else {
      res.send('Only for logged in users... pls login first')
    }
})
route.post('/login',async (req,res)=>{
    try {
        const verifiedUser = await login(req.body)
        res.send(verifiedUser)
      } catch (err) {
        res.status(403).send({
          errors: {
            body: [ err.message ]
          }
        })
      }
})
route.post('/',async (req,res)=>{
    const createdUser=await CreateUser(req.body)
    if(!createdUser){
      res.status(403).send({
        errors: {
          body: [
            'User Not Created , Please Try Again'
          ]
        }
      })
    }
    res.send(createdUser);
})

module.exports = route;