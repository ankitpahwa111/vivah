import React from 'react'
import UserSummary from './UserSummary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import Footer from '../Layout/Footer'
const UserList = (props) => {

  //console.log(props)
  const {matches,auth} = props;
  if (!auth.user) {
    return <Redirect to='/'></Redirect>
  }
  if(matches.length==0){
    return <div className="center red-text">No Matches Found</div>
  }
  
  return (
    <React.Fragment>
      <div className="user-list section">
        {matches && matches.map(match =>

          <UserSummary user={match} />

        )

        }

      </div>
      <Footer />
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  
  return {
    matches: state.matches.users || [],
    auth: state.auth
  }

}
export default connect(mapStateToProps)(UserList)