import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../Store/Actions/authActions';
import { Redirect } from 'react-router-dom';
import Footer from '../Layout/Footer'
class Signin extends Component {
    state = {
        email: '',
        password: '',
        gender: ''
    };
    handleOnChange = (e) => {
        //console.log(e.target)
        this.setState({
            [e.target.id]: e.target.value,

        })
    }
    handleOnSubmit = (e) => {
        if(this.state.gender!== 'male' && this.state.gender!== 'female'){
            throw new Error('the gender must be "male" or "female"')
        }
        e.preventDefault();
        //console.log(this.state)
        this.props.signIn(this.state)
        //this.props.history.push('/')
        // this.props.history.push('/')
        // if(this.props.authError===null)
        // this.props.history.push('/')
    }

    render() {

        if(this.props.auth.user){
            return <Redirect to='/'></Redirect>
        }
        return (
            <React.Fragment>
                <div className="container">
                    <form onSubmit={this.handleOnSubmit} className="white">
                        <h5 className="dark-grey text-darken-3">Sign In</h5>

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleOnChange} />
                        </div>


                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleOnChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="gender">Gender (male or female)</label>
                            <input type="text" id="gender" onChange={this.handleOnChange} />
                        </div>
                        <div className="input-field">
                            <button className="btn z-depth-0 pink darken-1">Login
                            <i class="material-icons right">send</i>
                            </button>
                        </div>

                    </form>
                </div>
                <br /> <br /> <br />
                <Footer />
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth : state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
