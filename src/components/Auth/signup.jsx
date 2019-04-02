import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { signUp } from '../../store/Actions/authActions'
import Footer from '../Layout/Footer'
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    //this.props.signUp(this.state);
    this.props.history.push('/')
  }
  render() {

    return (
      <React.Fragment>
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id='email' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="username">Choose A Username</label>
              <input type="text" id='username' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Choose a Password</label>
              <input type="password" id='password' onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="Age">Age</label>
              <input type="number" id='Age' onChange={this.handleChange} />
            </div>
            <div class="row">
              <label>Gender </label>
              <select>
                <option value="" disabled selected>Male</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            
            <div class="row">
              <label>Religion</label>
              <select>
                <option value="" disabled selected>Hindu</option>
                <option value="1">Hindu</option>
                <option value="2">Muslim</option>
                <option value="3">Christian</option>
                <option value="4">Sikh</option>
              </select>
            </div>
            <div class="row">
              <label>Profession : </label>
              <select>
                <option value="" disabled selected>Doctor</option>
                <option value="1">Engineer</option>
                <option value="2">Doctor</option>
                <option value="3">Teacher</option>
                <option value="4">Business Owner</option>
              </select>
            </div>
            <div class="row">
              <label>Region :</label>
              <select>
                <option value="" disabled selected>Delhi</option>
                <option value="1">Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Chennai</option>
                <option value="4">Kolkata</option>
              </select>
            </div>
            <div class="row">
              <label>Astrological Sign</label>
              <select>
                <option value="" disabled selected>Gemini</option>
                <option value="1">Aries</option>
                <option value="2">Gemini</option>
                <option value="3">Capricorn</option>
                <option value="4">Libra</option>
              </select>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up
            <i class="material-icons right">add_circle</i>
              </button>
              {/* <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div> */}
            </div>
          </form>
        </div>
        <br /><br /><br /><br />
        <Footer />
      </React.Fragment>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.firebase.auth,
//     authError: state.auth.authError
//   }
// }

// const mapDispatchToProps = (dispatch)=> {
//   return {
//     signUp: (creds) => dispatch(signUp(creds))
//   }
// }

export default SignUp;