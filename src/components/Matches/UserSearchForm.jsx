import React from 'react';
import { Link } from 'react-router-dom';
// import SignedInLinks from './signedInLinks';
// import SignedOutLinks from './signedOutLinks';
// import { connect } from 'react-redux';
const UserSearchForm = () => {


    return (
        <React.Fragment>
            <div class="row Myform">
                <form class="col s12">
                    <div class="row">
                        <label>I am looking for a : </label>
                        <select>
                            <option value="" disabled selected>Male</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="age_lower_limit" type="text" />
                            <label for="age_lower_limit">Aged :</label>
                        </div>



                        <div class="input-field col s6">
                            <input id="age_upper_limit" type="text" class="validate" />
                            <label for="age_upper_limit">To :</label>
                        </div>
                    </div>
                    <div class="row">
                        <label>Of Religion : </label>
                        <select>
                            <option value="" disabled selected>Hindu</option>
                            <option value="1">Hindu</option>
                            <option value="2">Muslim</option>
                            <option value="3">Christian</option>
                            <option value="4">Sikh</option>
                        </select>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Find Match
                    <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>
            
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
export default UserSearchForm;