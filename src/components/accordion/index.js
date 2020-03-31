import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import axios from "axios";

import './style.scss';

class Accordion extends Component {
  constructor() {
    super();
    // You should use object to delineate the type
    this.state = {data01: {}, repository :{} }
    this.state = {
      showTab01: true,
      showTab02: false,
      showTab03: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {

    switch (name) {
      case "showTab01":
        this.setState({ showTab01: true, showTab02: false, showTab03: false  });
        break;
      case "showTab02":
        this.setState({ showTab02: true, showTab01: false, showTab03: false });
        break;
      case "showTab03":
        this.setState({ showTab03: true, showTab01: false, showTab02: false });
        break;
      default:
    }
  }

  componentDidMount() {
    // Better use native Promise.all
    Promise.all([
      axios.get('./json/tab1.json'),
      axios.get('./json/tab2.json'),
      axios.get('./json/tab3.json')
    ])
    // use arrow function to avoid loosing context
    // BTW you don't need to use axios.spread with ES2015 destructuring
    .then(([data01Response, data02Response, data03Response]) => {
      this.setState({data01 : data01Response.data.item, data02 : data02Response.data.item, data03 : data03Response.data.item });
    });
  }


  render() {
    const { data01, data02, data03 } = this.state;
    const { showTab01, showTab02, showTab03 } = this.state;


    return (
      <div className="accordion">
        <Fade>
            <div className="container">
              <div className="accordion__col01">
                <ul className="accordion__nav">
                  <li>
                    <button className={ showTab01 ? "active" : "" } onClick={() => this.hideComponent("showTab01")}>{data01 && data01.title} <FontAwesomeIcon icon={faChevronDown} /></button>
                  </li>
                  <li>
                    <button className={ showTab02 ? "active" : "" } onClick={() => this.hideComponent("showTab02")}>{data02 && data02.title} <FontAwesomeIcon icon={faChevronDown} /></button>
                  </li>
                  <li>
                    <button className={ showTab03 ? "active" : "" } onClick={() => this.hideComponent("showTab03")}>{data03 && data03.title} <FontAwesomeIcon icon={faChevronDown} /></button>
                  </li>
                </ul>
              </div>
              <div className="accordion__col02">
                <div className={ showTab01 ? "accordion__content active" : "accordion__content" }>{data01 && data01.content}</div>
                <div className={showTab02 ? "accordion__content active" : "accordion__content" }>{data02 && data02.content}</div>
                <div className={showTab03 ? "accordion__content active" : "accordion__content" }>{data03 && data03.content}</div>

                {/*{data01.content && data01.content.map(item => <p>{item}</p>)}*/}

              </div>
            </div>
        </Fade>
      </div>
    )
  }
}
export default Accordion;

