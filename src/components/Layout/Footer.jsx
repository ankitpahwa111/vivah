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
                        <Link class="grey-text text-lighten-3" to="/">How To Use Vivah.com ? </Link> <br/>
                        <Link class="grey-text text-lighten-3" to="/">Community</Link> <br/>
                        <Link class="grey-text text-lighten-3" to="/">Contribute</Link>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text"><blockquote> Company</blockquote></h5>
                        <ul>
                            <li><Link class="grey-text text-lighten-3" to="/">Need Help</Link></li>
                            <li><Link class="grey-text text-lighten-3" to="/contact">Contact Us</Link></li>
                            <li><Link class="grey-text text-lighten-3" to="/about">About Us</Link></li>
                            <li><Link class="grey-text text-lighten-3" to="/">Become A Member</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2019 Vivah.com By Ankit Pahwa
            
                </div>
            </div>
        </footer>
    )
}
export default Footer;