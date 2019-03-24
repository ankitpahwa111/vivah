const { Router } = require('express');
const route = Router();
route.get('/', (req, res) => {
    console.log('here')
    res.send([{
        'male': {
            'name': 'Ankit Pahwa',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi'
        },
        'female': {
            'name': 'Carolina',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi'
        }
    },
    {
        'male': {
            'name': 'Ankit Pahwa',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi'
        },
        'female': {
            'name': 'Carolina',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi'
        }
    },
    {
        'male': {
            'name': 'Ankit Pahwa',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi'
        },
        'female': {
            'name': 'Carolina',
            'age': 25,
            'religion': 'Hindu',
            'region': 'Delhi'
        }
    }

    ])
})
module.exports = route;