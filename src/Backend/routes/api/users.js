const { Router } = require('express');
const {CreateUser,login} = require('../../controllers/UserController');
const route = Router()
route.get('/', (req, res) => {
    res.send([
        {
            'name': 'YIYI',
            'age': 45,
            'religion': 'Hindu',
            'region': 'Lucknow'

        },
        {
            'name': 'YIYI1',
            'age': 45,
            'religion': 'Hindu',
            'region': 'Lucknow'

        },
        {
            'name': 'YIYI2',
            'age': 45,
            'religion': 'Hindu',
            'region': 'Lucknow'

        },
        {
            'name': 'YIYI3',
            'age': 45,
            'religion': 'Hindu',
            'region': 'Lucknow'

        }
    ])
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