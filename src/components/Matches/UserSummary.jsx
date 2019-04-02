import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'
const UserSummary = (props) => {

    return (

        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <img src="./Vivah.jpg" alt="ProfileImage" class='profile-image'/>
                        
                        <span class="card-title profile-name">Ankit Pahwa</span>
                        <br />
                        <span>21</span>
                        <br />
                        <span>Delhi</span>
                        <br />
                        <span>Hindu</span>
                        <br />
                        <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                        <Link to='/:username'>View Profile {' '} {' '}
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