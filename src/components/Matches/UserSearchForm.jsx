import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { findMatches } from '../../Store/Actions/matchActions'
import { Redirect } from 'react-router-dom';
import $ from 'jquery'
class UserSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age_lower_limit: null,
            age_upper_limit: null,
            gender: '',
            religion : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnSubmit = async (e) => {

        e.preventDefault();
        
        await this.handleChange(e)
        
        await this.props.findMatches(this.state);
        this.props.history.push('/searches')

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
          })
          const gender = document.getElementById('gender').options[document.getElementById('gender').selectedIndex].text;
          const religion = document.getElementById('religion').options[document.getElementById('religion').selectedIndex].text;
          this.setState({
            'gender': gender,
            'religion': religion,
          })
          if(this.state.gender=='') this.state.gender='male';
          if(this.state.religion=='') this.state.religion = 'Hindu'
    }
    componentDidMount() {
    
        window.$('select').material_select()
    
      }
    render() {
        // if(this.props.auth.user){
        //     return <Redirect to='/searches'></Redirect>
        // }
        return (
            <React.Fragment>
                <div class="row Myform">
                    <form class="col s12">
                        <div class="row">
                            <label>I am looking for a : </label>
                            <select id='gender'>
                                <option value="" disabled selected>Male</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="age_lower_limit" type="number" onChange={this.handleChange}/>
                                <label for="age_lower_limit">Aged :</label>
                            </div>



                            <div class="input-field col s6">
                                <input id="age_upper_limit" type="number" onChange={this.handleChange}/>
                                <label for="age_upper_limit">To :</label>
                            </div>
                        </div>
                        <div class="row">
                            <label>Of Religion : </label>
                            <select id='religion'>
                                <option value="" disabled selected>Hindu</option>
                                <option value="1">Hindu</option>
                                <option value="2">Muslim</option>
                                <option value="3">Christian</option>
                                <option value="4">Sikh</option>
                            </select>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" onClick={this.handleOnSubmit}>Find Match
                        <i class="material-icons right">send</i>
                        </button>
                    </form>
                </div>

            </React.Fragment>
        )
    }

}
const mapStateToProps = (state) => {
    
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findMatches: (creds) => dispatch((findMatches(creds)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserSearchForm);