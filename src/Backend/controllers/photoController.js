const { photos, males, females } = require('../Models');
async function addPhoto(url, user) {
    if (user.gender == 'male') {
        let male = await males.findOne({
            where: {
                username: user.username
            }
        })
        await photos.create({
            url: url,
            maleUsername: user.username
        })
        //console.log(await male.getPhotos())

    }
    if (user.gender == 'female') {
        let female = await females.findOne({
            where: {
                username: user.username
            }
        })
        await photos.create({
            url: url,
            femaleUsername: user.username
        })


    }
}
async function getPhotos(user) {
    if (user.gender == 'male') {
        const male = await males.findOne({
            where: {
                username: user.username
            }
        })
        return await male.getPhotos();
    }
    if (user.gender == 'female') {
        const female = await females.findOne({
            where: {
                username: user.username
            }
        })
        return await female.getPhotos();
    }
}
// Test case 
// const user = {
//     username: 'ankit111',
//     gender: 'male'
// }
// getPhotos(user).then(photos => console.log(photos[0].get()))
module.exports = {
    addPhoto,
    getPhotos
}