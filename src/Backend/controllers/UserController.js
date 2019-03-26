const { males } = require('../Models');
const { females } = require('../Models');

const { religion } = require('../Models');

// this function returns a promise with users within age range and with given religion
// ageRange is an object with lowerLimit and UpperLimit as age keys;
//the users returned are sequelize objects , so do users.get() to get users;

async function getUsers(ageRange, religionOfUser,gender) {
    //console.log('gender of user :' , gender)
    let model = males;
    if(gender=='male')
    model = females;
    const ReligionOpted = await religion.findOne({
        attributes: ['id'],
        where: {
            name: religionOfUser
        }
    })
    //console.log(await ReligionOpted.getMales())

    const users = await model.findAll({
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
//test case
// let ageRange = {
//     lowerLimit: 30,
//     upperLimit: 40
// }
// getUsers(ageRange, 'Hindu').then((users) => console.log(users));

async function getUser(username) {
    const user = await males.findOne({
        where: {
            username: username
        }
    })
    let id = user.get().religionId;
    const religionOfUser = await religion.findOne({
        attributes: ['name'],
        where: { id : id }
    })
    user.get().religionName = religionOfUser.get().name;
    //console.log(await user.getFemales());
    return user;
}
//getUser('ankit111').then((user)=>console.log(user))
module.exports = { getUsers , getUser }