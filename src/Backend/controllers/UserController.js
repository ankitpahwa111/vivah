const { males } = require('../Models');
const { females } = require('../Models');

const { religion } = require('../Models');

async function getUserByReligionId(id) {

    return await males.findAll({
        where: {
            religionId: id
        }
    })



}
// this function returns a promise with users within age range and with given religion
// ageRange is an object with lowerLimit and UpperLimit as age keys;
//the users returned are sequelize objects , so do users.get() to get users;

async function getUsers(ageRange, religionOfUser) {
    const ReligionOpted = await religion.findOne({
        attributes: ['id'],
        where: {
            name: religionOfUser
        }
    })

    const users = await males.findAll({
        where: {
            religionId: ReligionOpted.id
        }
    })

    users.forEach((user) => {
        user.get().religionName = religionOfUser;
        //console.log(user.get())
    })
    //console.log(users)
    const newusers = users.filter((user) => {
        if (user.get().age >= ageRange.lowerLimit && user.get().age <= ageRange.upperLimit)
            return user;
    })
    return newusers;
}
// let ageRange = {
//     lowerLimit: 50,
//     upperLimit: 70
// }
// getUsers(ageRange, 'Hindu').then((users) => console.log(users));

async function getUser(username) {

}
module.exports = { getUsers }