import React from 'react';
import { Link } from 'react-router-dom';
// import SignedInLinks from './signedInLinks';
// import SignedOutLinks from './signedOutLinks';
// import { connect } from 'react-redux';
const Navbar = () => {


    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Vivah.com</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to= '/'>LOGOUT</Link></li>
                    <li><Link to= '/'>HELP</Link></li>
                    <li><Link to= '/'>CONTACT</Link></li>
                    <li><Link to='/' class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">AP</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
export default Navbar;