const { photos, males, females } =  require('../Models');
async function addPhoto(url , user){
    if(user.gender=='male'){
        let male = await males.findOne({
            where : {
                username : user.username
            }
        })
        await male.addPhoto(url)
    }
}
async function getPhotos(user){

}
const user ={
    username : 'ankit111',
    gender : 'male'
}
addPhoto('https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwil-NPegKHhAhWDinAKHVFeDHQQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw0fK6Yhk_apNqa57O0YJUAG&ust=1553730885848255',user)
module.exports= {
    addPhoto,
    getPhotos
}