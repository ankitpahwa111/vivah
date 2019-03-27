const { males, females } = require('../Models');
async function makeFavourite(firstUser, secondUser) {

    if (firstUser.gender == 'male') {
        let male = {}, female = {};
        male = await males.findOne({
            where: {
                username: firstUser.username
            }
        })
        female = await females.findOne({
            where: {
                username: secondUser.username
            }
        })
        await male.addFemale(female);

    }
    if (firstUser.gender == 'female') {
        let male = {}, female = {};
        male = await males.findOne({
            where: {
                username: secondUser.username
            }
        })
        female = await females.findOne({
            where: {
                username: firstUser.username
            }
        })
        await female.addMale(male);

    }

}
//Test Case
// let firstUser= {
//     username : 'ankit111',
//     gender : 'female'
// }
// let secondUser= {
//     username : 'ankit11',
//     gender : 'male'
// }
// makeFavourite(firstUser,secondUser)
module.exports = { makeFavourite }