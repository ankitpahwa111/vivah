import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Layout/Footer'
class UserDetails extends Component {


    // async componentDidMount() {
    //     const username = this.props.match.params.username;
        
    //     if (this.props.flag == true) {
    //         console.log(username)
    //         try {
    //             axios({
    //                 url: 'localhost:7788/api/user',
    //                 params: {
    //                     username: username
    //                 },
    //                 headers: { 'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua2l0cGFod2ExMTFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJhbmtpdDExIiwicGFzc3dvcmQiOiJhbmtpdDk4OTkiLCJnZW5kZXIiOiJtYWxlIiwiaWF0IjoxNTUzNDMzMDc1fQ.Hce-6Px85R2pqsmR_owveWogSnQV93Ttx7WvLNlk10E' },
    //                 method: 'GET'
    //             }).then((user) => {
    //                 console.log(user.data)
    //                 this.props.user = user.data;
    //                 console.log(this.props)
    //                 this.props.flag = false;
    //             })
    //         } catch (err) {
    //             console.log('error is :',err)
    //         }
    //     }
    // }

    render() {
        const user = this.props.user;
        const auth = this.props.auth;
        if (!auth.user) {
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
                                <br />
                                <br />
                                <a class="waves-effect waves-light btn"><i class="material-icons left">add_a_photo</i>View Pictures</a>
                                <a class="btn-floating halfway-fab waves-effect waves-light red right"><i class="material-icons">add</i></a>
                            </div>
                        </div>
                        {/* add Photos of the user */}
                    </div>
                </div>
                <br /><br />
                <Footer />
            </React.Fragment>
        )
    }



}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const username = ownProps.match.params.username;
    //console.log(id);
    const users = state.matches.users;
    //console.log(projects)
    const fakeUser = 
        {
            name: state.auth.user.username,
            age: 34,
            region: "Delhi",
            job: "Doctor ",
            astro: "gemini",
            email: state.auth.user.email,
            religionName: "Hindu"
        }
    
    const user = users ? users.filter((user) => user.username === username)[0] : fakeUser;
    console.log(user);
    let flag = false;
    if (username === state.auth.user.username) {
        flag = true;
    }
    return {
        user: user,
        auth: state.auth,
        flag: flag,
        fakeUser : fakeUser
    }
}
export default connect(mapStateToProps)(UserDetails)