import React, { Component } from "react";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';

import './style.scss';
import logo from '../../images/logo-playground.png';

class Header extends Component {

  constructor(props) {
     super(props);
     this.state = {
       openMenu: false
     }
    this.openMenuComponent = this.openMenuComponent.bind(this);
  }

  openMenuComponent() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  componentDidMount() {
    window.onscroll = function() {
      if(window.pageYOffset > 0) {
        const element = document.getElementById("masthead");
        element.classList.add("site-header--scroll");
      } else {
        const element = document.getElementById("masthead");
        element.classList.remove("site-header--scroll");
      }
    }
  }
  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <header id="masthead" className="site-header">
        <Fade down>
          <div className={ this.state.openMenu ? "container site-header__menu-open" : "container" }>
            <div className="site-header__brand">
              <Link to="slideshow" title="Playground" smooth={true} offset={0} duration={500}>
                  <img src={logo} alt="Playground" />
              </Link>
            </div>

            <button className={ this.state.openMenu ? "site-header__menu-toggle open" : "site-header__menu-toggle" } onClick={() => this.openMenuComponent()}>
                <span className="menu-toggle__hamb-bar"></span>
                <span className="menu-toggle__hamb-bar"></span>
                <span className="menu-toggle__hamb-bar"></span>
            </button>

            <div className="site-header__wrapper">
                <nav className="site-header__navigation">
                  <ul className="nav site-header__navigation__menu">
                    <li><Link activeClass="active" to="we-are" spy={true} smooth={true} offset={-50} duration={500} title="we are">we are</Link></li>
                    <li><Link activeClass="active" to="we-do" spy={true} smooth={true} offset={-50} duration={500} title="we do">we do</Link></li>
                    <li><Link activeClass="active" to="careers" spy={true} smooth={true} offset={-50} duration={500} title="careers">careers</Link></li>
                    <li><Link activeClass="active" to="contact-us" spy={true} smooth={true} offset={-50} duration={500} title="contact us">contact us</Link></li>
                  </ul>
                </nav>
            </div>
          </div>
        </Fade>
      </header>
      )
  }
}

export default Header;

                                                        