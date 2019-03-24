const { Router } = require('express');
const route = Router()
route.get('/', (req, res) => {
    res.send(
        {
            'name': 'Carolina Pahwa',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi',
            'birthDate': new Date(),
            'job': 'Description',
        }
    )
})
module.exports = route;