const { males } = require('../Models');
const { females } = require('../Models');
const { createJwt } = require('../utils/jwt')
async function CreateUser(user) {
    let male = {};
    let female = {};
    if (!user.username) throw new Error('missing username')
    if (!user.password) throw new Error('missing username')
    if (!user.name) throw new Error('missing username')
    if (!user.age) throw new Error('missing username')
    if (!user.region) throw new Error('missing username')
    if(!user.religionId) throw new Error('missing username')
    if (!user.email) throw new Error('missing username')
    if (!user.job) throw new Error('missing username')
    if (!user.gender) throw new Error('gender missing')
    if (user.gender === 'male') {
        try{
            male = await males.create({
                ...user
            })
            
            const token = await createJwt(male.get())
    
            const userJson = {
                ...male.get(),
                token
            }
            delete userJson.password
            return userJson
        }
        catch(err){
            err.message = 'User Not created , try again';
            return err.message;
        }
        
        //return male;
    }
    if (user.gender === 'female') {
        female = await females.create({
            ...user
        })
        const token = await createJwt(female.get())
        const userJson = {
            ...female.get(),
            token
        }
        delete userJson.password
        return userJson
        if (!female) throw new Error('cannot create user')
        return female;
    }

}
async function login(userOpts) {
    let male = {}, female = {};
    if (!userOpts.email) {
        throw new Error('Did not supply email')
    }
    if (!userOpts.password) {
        throw new Error('Did not supply password')
    }
    if (userOpts.gender === 'male') {
        male = await males.findOne({
            attributes: ['email', 'username', 'password'],
            where: {
                email: userOpts.email,
            }
        })
        if (male.password !== userOpts.password) {
            throw new Error('password did not match')
        }
        if (!male) {
            throw new Error('user does not exist')
        }
        male.get().gender='male';
        const token = await createJwt(male.get())
        //male.gender='male';
        // console.log(male.get())
        
        const userJson = {
            ...male.get(),
            token
        }
        delete userJson.password
        return userJson
    }
    if (userOpts.gender === 'female') {
        female = await females.findOne({
            attributes: ['email', 'username', 'password'],
            where: {
                email: userOpts.email,
            }
        })
        if (female.password !== userOpts.password) {
            throw new Error('password did not match')
        }
        
        if (!female) {
            throw new Error('user does not exist')
        }
        female.get().gender='female';
        const token = await createJwt(female.get())
        
        const userJson = {
            ...female.get(),
            token
        }
        delete userJson.password
        return userJson
    }

}
module.exports = { CreateUser, login }
