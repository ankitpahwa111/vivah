const { Router } = require('express');
const {CreateUser,login} = require('../../controllers/AuthController');
const { userAuthViaToken } = require('../../middlewares/auth')
const { getUsers } = require('../../controllers/UserController')
const route = Router()
route.get('/',userAuthViaToken, (req, res) => {
    if(req.body.email){
         let ageRange= {
             lowerLimit : req.params.lowerLimit,
             upperLimit : req.params.upperLimit
         }
         getUsers(ageRange,req.params.religion).then((users)=>{
             res.send(users)
         })
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
    res.send(createdUser);
})

module.exports = route;