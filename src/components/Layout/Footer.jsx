import React from 'react';
import { Link } from 'react-router-dom';
const Footer = (props) => {

    return (
        <footer class="page-footer Myfooter">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text"><blockquote> Vivah Pvt. Ltd.</blockquote></h5>
                        <br/>
                        <a class="grey-text text-lighten-3" href="#!">How To Use Vivah.com ? </a> <br/>
                        <a class="grey-text text-lighten-3" href="#!">Community</a> <br/>
                        <a class="grey-text text-lighten-3" href="#!">Contribute</a>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text"><blockquote> Company</blockquote></h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">Need Help</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Become A Member</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2019 Copyright Text
            
                </div>
            </div>
        </footer>
    )
}
export default Footer;