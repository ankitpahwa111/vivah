import axios from 'axios';
export const findMatches = (credentials) => {
    return (dispatch, getState) => {
        axios({
            method: 'GET',
            params : {
                lowerLimit : credentials.age_lower_limit,
                upperLimit : credentials.age_upper_limit,
                religion : credentials.religion
            },
            url: '/api/users',
            headers: {
                'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua2l0cGFod2ExMTEwMDBAZ21haWwuY29tIiwidXNlcm5hbWUiOiJhbmtpdDExMSIsInBhc3N3b3JkIjoiYW5raXQ5ODk5IiwiZ2VuZGVyIjoiZmVtYWxlIiwiaWF0IjoxNTUzNjI5NjY3fQ.HgsipVz0pO7YszCVqtc9y2SFG6qxHSf8qi6UZb-JLVo'
            }
        }).then((matches) => {
            
            dispatch({ type: 'MATCHES_FOUND', matches: matches.data })
        }).catch((err) => {
            dispatch({ type: 'MATCHES_NOT_FOUND', err })
        })
    }
}
export default { findMatches }