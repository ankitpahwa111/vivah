import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import {Redirect} from 'react-router-dom'
import Footer from '../Layout/Footer';
import UserSearchForm from '../Matches/UserSearchForm'
//import Navbar from '../Layout/Navbar'
class Dashboard extends Component {
    
    render() {
        
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
                                <Link to='/login'>LOGIN</Link>
                                <Link to='/signup'>SIGN UP </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <UserSearchForm history = {this.props.history}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Dashboard;
