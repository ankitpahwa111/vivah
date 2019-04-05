import axios from 'axios'
export const signIn = (credentials) => {
    //console.log(credentials)
    return (dispatch, getState) => {

        axios({
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:7788/api/users/login',
            method: 'POST',
            data: {
                email: credentials.email,
                password: credentials.password,
                gender: credentials.gender
            }
        }).then((user) => {
            console.log('logged in')
            dispatch({ type: 'LOGIN_SUCCESS', user: user.data })
        }).catch((err) => {
            //console.log( getState())
            console.log('error is ', err)
            dispatch({ type: 'LOGIN_FAILED', err: err })
        })
    }
}
export const signout = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'SIGNOUT' })
    }
}

export const signup = (credentials) => {
    return (dispatch, getState) => {
        if(credentials.religion === 'Hindu') credentials.religionId = 1 ;
        if(credentials.religion === 'Muslim') credentials.religionId = 2 ;
        if(credentials.religion === 'Christian') credentials.religionId = 3 ;
        if(credentials.religion === 'Sikh') credentials.religionId = 4 ;
        console.log(credentials)
        axios({
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json'
            },
            url: 'http://localhost:7788/api/users',
            method: 'POST',
            data: {
                email: credentials.email,
                password: credentials.password,
                gender: credentials.gender.toLowerCase(),
                name : credentials.firstName + ' ' + credentials.lastName,
                username : credentials.username ,
                age : credentials.age,
                religionId : Number(credentials.religionId),
                region : credentials.region.toLowerCase(),
                astro : credentials.astro.toLowerCase(),
                job : credentials.job,

            }
        }).then((user) => {
            console.log('signed up');
            user.data.gender = credentials.gender.toLowerCase();
            
            dispatch({ type: 'SIGNUP_SUCCESS', user: user.data })
        }).catch((err) => {
            //console.log( getState())
            console.log('error is ', err)
            dispatch({ type: 'SIGNUP_FAILED', err: err })
        })
      
    }
}
export default { signIn, signout, signup }