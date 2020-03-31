import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

import './style.scss';
import logo from '../../images/logo-playground-footer.png';

const Footer = () => (
  <footer id="footer" className="site-footer">
    <Fade up>
      <div className="container">
        <div className="site-footer__brand">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <nav className="site-footer__navigation">
          <ul className="nav site-footer__navigation__menu">
            <li><Link activeClass="active" to="we-are" spy={true} smooth={true} offset={-50} duration={500} title="we are">we are</Link></li>
            <li><Link activeClass="active" to="we-do" spy={true} smooth={true} offset={-50} duration={500} title="we do">we do</Link></li>
            <li><Link activeClass="active" to="careers" spy={true} smooth={true} offset={-50} duration={500} title="careers">careers</Link></li>
            <li><Link activeClass="active" to="contact-us" spy={true} smooth={true} offset={-50} duration={500} title="contact us">contact us</Link></li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="links-social">
          <a href="https://www.facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
          <a href="https://www.linkedin.com" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com" title="Instagram" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </Fade>
  </footer>
);

export default Footer;

                                                        