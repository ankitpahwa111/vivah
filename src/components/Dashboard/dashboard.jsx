import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Footer from '../Layout/Footer';
import UserSearchForm from '../Matches/UserSearchForm'
//import Navbar from '../Layout/Navbar'
const Dashboard = (props) => {


    let login = 'LOGIN';
    let signup = 'SIGN UP';
    let UserForm = null
    if (props.auth.user) {
        login = null;
        signup = null;
        UserForm = <UserSearchForm history={props.history} />
    }
    return (
        <React.Fragment>
            {/* <Navbar/> */}
            <div class="row Mycard">
                <div class="col">
                    <div class="card">
                        <div class="card-image">
                            <img src='./Vivah.jpg' />
                            <span class="card-title">Vivah</span>
                        </div>
                        <div class="card-content">
                            <p>We bring people together.
Love unites them...</p>
                            <p>Start Your Journey now ....</p>
                        </div>
                        <div class="card-action">
                            <Link to='/login'>{login}</Link>
                            <Link to='/signup'>{signup}</Link>
                        </div>
                    </div>
                </div>
            </div>
            {UserForm}
            <Footer />
        </React.Fragment>
    )

}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        authError: state.auth.authError,
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Dashboard);
