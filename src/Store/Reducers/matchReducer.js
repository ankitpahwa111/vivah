const initState = {
    authError: null
}
const matchReducer = (state = initState , action) => {
    switch(action.type){
        case 'MATCHES_FOUND' : {
            
            return {
                ...state,
                authError:null,
                users : action.matches
            }
        }
        case 'MATCHES_NOT_FOUND' : {
            return {
                authError: action.err.message
            }
        }
        
        default : return state
    }
}
export default matchReducer;