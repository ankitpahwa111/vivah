import React from 'react'
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import {Redirect} from 'react-router-dom'
// import moment from 'moment'
import Footer from '../Layout/Footer'
const UserDetails = (props) => {

    const user = props.user;
    const auth = props.auth;
    //const project = props.projects.find((project)=>project.id===id)
    if(!auth.user){
        return <Redirect to='/'></Redirect>
    }

    return (
        
        <React.Fragment>
        <div class="row user-details">
            <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="ProfileImage" />
                        <span class="card-title">{user.name}</span>
                        {/* <a class="btn-floating halfway-fab waves-effect waves-light red "><i class="material-icons">add</i></a> */}
                    </div>
                    <div class="card-content">
                        
                        <span>{user.age}</span>
                        <br />
                        <span>Lives in {user.region}</span>
                        <br />
                        <span>{user.religionName} by Religion</span>
                        <br />
                        <span>{user.job} By profession</span>
                        <br />
                        <span>Astro Sign is {user.astro}</span>
                        <br />
                        <span>contact at {user.email}</span>
                        <br/>
                        <br/>
                        <a class="waves-effect waves-light btn"><i class="material-icons left">add_a_photo</i>View Pictures</a>
                        <a class="btn-floating halfway-fab waves-effect waves-light red right"><i class="material-icons">add</i></a>
                    </div>
                </div>
                {/* add Photos of the user */}
            </div>
        </div>
        <br/><br/>
        <Footer/>
        </React.Fragment>
    )


}
const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const username = ownProps.match.params.username;
    //console.log(id);
    const users = state.matches.users;
    //console.log(projects)
    const user = users ? users.filter((user)=> user.username === username)[0] : null;
    console.log(user);
    return {
        user: user,
        auth: state.auth,
        
    }
}
export default connect(mapStateToProps)(UserDetails)