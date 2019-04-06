import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';
const Navbar = (props) => {
    let links={};
    if(props.auth.user)
    links = <SignedInLinks/>
    //console.log(props)
    if(!props.auth.user){
        links = <SignedOutLinks/>
    }
    return (
        <React.Fragment>
            <nav class="navbar-fixed">
                <div class="nav-wrapper">
                    
                    <Link to="/" class="brand-logo center">Vivah.com</Link>
                    
                        {/* <i class="material-icons">menu</i> */}
                    {links}
                    {/* <ul class="right hide-on-med-and-down">
                        <li><Link to='/'>LOGOUT</Link></li>
                        <li><Link to='/'>HELP</Link></li>
                        <li><Link to='/'>CONTACT</Link></li>
                        <li><Link to='/' class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">AP</i></Link></li>
                    </ul> */}
                </div>
            </nav>
            {/* <ul class="sidenav" id="slide-out">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul> */}
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Navbar);