import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'
const UserSummary = (props) => {
    const user = props.user;
    return (

        <div class="row">
            <div class="col ">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <img src="./Vivah.jpg" alt="ProfileImage" class='profile-image'/>
                        
                        <span class="card-title profile-name">{user.name}</span>
                        <br />
                        <span>{user.age}</span>
                        <br />
                        <span>{user.job}</span>
                        <br />
                        <span>{user.region}</span>
                        <br />
                        <p>I am a very simple person. I am good at containing small bits of information.
                           I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                        <Link to={'/searches/' + user.username}>View Profile {' '} {' '}
                        <i class="material-icons">sentiment_satisfied</i>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )
}
// const mapStateToProps=(state)=>{
//     return {
//         profile : state.firebase.profile
//     }
// }
export default UserSummary;