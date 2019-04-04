const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS' : {
            return {
                ...state,
                authError:null,
                user : action.user
            }
        }
        case 'LOGIN_FAILED' : {
            return {
                ...state,
                authError: action.err.message
            }
        }
        default : return state
    }
}
export default authReducer;