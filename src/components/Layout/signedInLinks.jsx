import React from 'react';
import { NavLink } from 'react-router-dom';
import { signout } from '../../Store/Actions/authActions';
import { connect } from 'react-redux';
import axios from 'axios'
const SignedInLinks = (props) => {
    //console.log('here')
    
    const auth = props.auth;
    const initial = auth.user.username[0];
    console.log(auth)
    return (
        <div>
            <ul className='right'>
                <li><a onClick={props.signOut}>Sign Out</a></li>
                <li><NavLink to={'/searches/' + auth.user.username} className='btn btn-floating pink lighten-3'>{initial}</NavLink></li>
            </ul>
        </div>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signout())
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)