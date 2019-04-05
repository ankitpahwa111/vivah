import axios from 'axios'
export const signIn = (credentials) => {
    //console.log(credentials)
    return (dispatch, getState) => {

        axios({
            headers : {'Access-Control-Allow-Origin' : true,
                        'Content-Type' : 'application/json'},
            url: 'http://localhost:7788/api/users/login',
            method: 'POST',
            data: {
                email : credentials.email , 
                password : credentials.password , 
                gender : credentials.gender
            }
        }).then((user) => {
            console.log('logged in' )
            dispatch({ type: 'LOGIN_SUCCESS', user: user.data })
        }).catch((err) => {
            //console.log( getState())
            console.log('error is ', err)
            dispatch({ type: 'LOGIN_FAILED', err: err })
        })
    }
}
export default { signIn }