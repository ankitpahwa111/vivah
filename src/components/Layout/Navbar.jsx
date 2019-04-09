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
                    
                        
                    {links}
                    
                </div>
            </nav>
            
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Navbar);