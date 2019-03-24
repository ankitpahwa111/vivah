const { Router } = require('express');
const route = Router();
route.use('/couples',require('./couples'))

route.use('/users',require('./users'))
route.use('/user',require('./user'))
module.exports=route;