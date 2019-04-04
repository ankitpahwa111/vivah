import axios from 'axios'
export const signIn = (credentials) => {
    //console.log(credentials)
    return (dispatch, getState) => {

        axios({
            url: 'http://localhost:7788/api/users/login',
            method: 'POST',
            headers : 'Access-Control-Allow-Origin',
            data: {
                email : credentials.email , 
                password : credentials.password , 
                gender : credentials.gender
            }
        }).then((user) => {
            console.log('logged in')
            dispatch({ type: 'LOGIN_SUCCESS', user: user })
        }).catch((err) => {
            //console.log( getState())
            console.log('error is ', err)
            dispatch({ type: 'LOGIN_FAILED', err: err })
        })
    }
}
export default { signIn }