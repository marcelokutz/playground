import React, { Component } from "react";
import Cookies from 'js-cookie';
import './style.scss';

class CookieBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCookieBar: false,
      username: Cookies.get('username')
    }
    this.hideCookieBarComponent = this.hideCookieBarComponent.bind(this);
  }

  

  hideCookieBarComponent() {
    Cookies.set('hideCookieBar', 'hide', { expires: 1 });
    this.setState({
      hideCookieBar: !this.state.hideCookieBar
    })
  }

  componentDidMount() {
    if(Cookies.get('hideCookieBar') !== 'hide') {
      this.setState({
        hideCookieBar: !this.state.hideCookieBar
      })
    }
  }


  render() {


    return (
      <div className={ this.state.hideCookieBar ? "cookie-bar open" : "cookie-bar" }>
        <div className="container">
          <p>Our website uses cookies to improve your experience. To find out more about the cookies we use please see our <a href="/" title="Cookies Policy">Cookies Policy</a> <button className="btn" title="OK" onClick={() => this.hideCookieBarComponent()}>OK</button></p>
        </div>
      </div>
    )
  }
}
export default CookieBar;

