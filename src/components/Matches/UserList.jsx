import React from 'react'
import UserSummary from './UserSummary';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';
import { Link } from 'react-router-dom';
//import {Redirect} from 'react-router-dom'
import Footer from '../Layout/Footer'
const UserList = (props) => {

  //console.log(props)

  return (
    <React.Fragment>
      <div className="user-list section">
        <UserSummary />
        <UserSummary />
        <UserSummary />
        <UserSummary />
      </div>
      <Footer/>
    </React.Fragment>
  )
}
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     projects: state.firestore.ordered.projects,
//     auth : state.firebase.auth
//   }

// }
export default UserList