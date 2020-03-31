import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Reveal from 'react-reveal/Reveal';

import './style.scss';


const BannerAbout = (props) => (

    <div name={props.name} className={`banner-about__item banner-about__item--${props.layoutColor}`} style={{ backgroundImage: `url(${props.imgBackground})` }}>
      <div className="banner-about__block">
        <Reveal effect="show-elements">
          <div className="banner-about__content">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <a href={props.buttonURL} className="banner-about__btn" title={props.buttonName}>{props.buttonName} <FontAwesomeIcon icon={faChevronRight} /></a>
          </div>
        </Reveal>
      </div>
    </div>
)

export default BannerAbout;

