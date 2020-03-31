import React from "react";
import Fade from 'react-reveal/Fade';

import './style.scss';


const Cards = (props) => (

    <Fade>
      <div name={props.name} className="card__item">
        <div className="card__block">
          <div className="card__content">
            <div className="card_header" style={{ backgroundImage: `url(${props.imgBackground})` }}>
              <h2>{props.title}</h2>
            </div>
            <div className="card__text">
              <p>{props.content}</p>
            </div>
            <a href={props.buttonURL} className="card__btn" title="READ MORE">READ MORE</a>
          </div>
        </div>
      </div>
    </Fade>
)

export default Cards;

