const { males } = require('../Models');
const { females } = require('../Models');
const { createJwt } = require('../utils/jwt')
async function CreateUser(user) {
    console.log(user)
    let male = {};
    let female = {};
    if (!user.username) throw new Error('missing username')
    if (!user.password) throw new Error('missing password')
    if (!user.name) throw new Error('missing name')
    if (!user.age) throw new Error('missing age')
    if (!user.region) throw new Error('missing region')
    if (!user.religionId) throw new Error('missing religionId')
    if (!user.email) throw new Error('missing email')
    if (!user.job) throw new Error('missing job')
    if (!user.gender) throw new Error('gender gender')
    if (!user.astro) throw new Error('missing astro sign')
    if (user.gender === 'male') {
        try {
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
        catch (err) {
            console.log(err)
            err.message = 'User Name is taken , pls try another user name';
            return err.message;
        }

        //return male;
    }
    if (user.gender === 'female') {
        try {
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
        }
        catch (err) {
            err.message = 'User Name is taken , pls try another user name';
            return err.message;
        }

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
        if (!male) {
            throw new Error('user does not exist with this email')
        }
        if (male.password !== userOpts.password) {
            throw new Error('password did not match')
        }

        male.get().gender = 'male';
        const token = await createJwt(male.get())


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
        if (!female) {
            throw new Error('user does not exist with this email ')
        }
        if (female.password !== userOpts.password) {
            throw new Error('password did not match')
        }


        female.get().gender = 'female';
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
