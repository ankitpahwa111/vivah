import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Layout/Footer'
const styleCard = {
    'height' : '500px',
    'width'  : '500px',
    'margin-left' : '500px'
}
class About extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="card" style = {styleCard}>
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://i.pinimg.com/originals/5a/e5/8f/5ae58f5036997cfd4636917403c3c951.jpg"/>
                    </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Contact Vivah.com<i class="material-icons right">more_vert</i></span>
                            <p><Link to="/">Go Back</Link></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Contact Vivah<i class="material-icons right">close</i></span>
                            <p>Here is some more information about Contacting the developers.</p>
                        </div>
                    </div>
                    <br/>
                    <Footer/>
      </React.Fragment>

                )
              }
            
            
            }
export default About;