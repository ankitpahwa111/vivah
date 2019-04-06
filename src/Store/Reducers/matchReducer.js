
const authReducer = (state , action) => {
    switch(action.type){
        case 'MATCHES_FOUND' : {
            
            return {
                ...state,
                authError:null,
                users : action.matches
            }
        }
        case 'LOGIN_FAILED' : {
            return {
                authError: action.err.message
            }
        }
        
        default : return state
    }
}
export default authReducer;