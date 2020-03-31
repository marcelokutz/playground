import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

import './style.scss';

class FormHome extends Component {
  constructor(props){
    super(props);

    this.state = {
      fields: {},
      errors: {}
    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //message
    if(!fields["message"]){
      formIsValid = false;
      errors["message"] = "It can not be empty";
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "It can not be empty";
    }

    if(typeof fields["email"] !== "undefined"){
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "The email is invalid";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
    }

  }

  handleChange(field, e){    		
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }

  render() {


    return (
      <div name="contact-us" className="form">
        <div className="container">
          <Fade left>
            <div className="form__left">
              <h2>contact us.</h2>
              <p>Playground srl<br/> 
              Via G. Mazzini 3/C,<br/>  
              Cernusco Sul Naviglio (Milano)<br/> 
              -<br/> 
              T <a href="tel:+39 0240706003" title="+39 0240706003">+39 0240706003</a></p>
            </div>
          </Fade>
          <Fade right>
            <div className="form__right">
              <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                <div className="form__row">
                  <div className="form__item form__item--50">
                    <input className="form__text" type="text" name="name" placeholder="name"></input>
                  </div>
                  <div className="form__item form__item--50">
                    <input className="form__text" type="text" name="last-name" placeholder="last name"></input>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__item">
                    <input className="form__text required" type="email" name="email" placeholder="email*" onChange={this.handleChange.bind(this, "email")} value={this.state.fields.email || ''}></input>
                    <span className="error">{this.state.errors["email"]}</span>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__item">
                    <textarea className="form__textarea required" type="textarea" name="message" placeholder="message*" onChange={this.handleChange.bind(this, "message")} value={this.state.fields.message || ''}></textarea>
                    <span className="error">{this.state.errors["message"]}</span>
                  </div>
                </div>
                <div className="form__row">
                  <div className="form__item">
                    <button className="form__button" id="submit">SEND <FontAwesomeIcon icon={faChevronRight} /></button>
                  </div>
                </div>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    )
  }
}
export default FormHome;

