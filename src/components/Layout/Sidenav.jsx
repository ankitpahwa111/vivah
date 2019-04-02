import React from 'react';
import { Link } from 'react-router-dom';
// import SignedInLinks from './signedInLinks';
// import SignedOutLinks from './signedOutLinks';
// import { connect } from 'react-redux';
const Sidebar = () => {


    return (
        <React.Fragment>
            <nav>  </nav>
            <ul id="slide-out" class="sidenav">
                <li><div class="user-view">
                    <div class="background">
                        <img src="/Vivah.jpg" />
                    </div>
                    <a href="#user"><img class="circle" src="/Vivah.jpg" /></a>
                    <a href="#name"><span class="white-text name">John Doe</span></a>
                    <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                </div></li>
                <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><div class="divider"></div></li>
                <li><a class="subheader">Subheader</a></li>
                <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
            {/* <a href="#" data-target="slide-out" class="sidenav-trigger"></a> */}
        </React.Fragment>
    )
}
// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         auth: state.firebase.auth
//     }
// }
export default Sidebar;