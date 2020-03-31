import React, { Component } from "react";
import Slider from "react-slick";

import './style.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from '../../images/slide01.jpg';
import slide02 from '../../images/slide02.jpg';
import slide03 from '../../images/slide03.jpg';


class Slideshow extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <Slider {...settings} className="slideshow" name="slideshow">
        <div>
          <div className="slideshow__item" style={{ backgroundImage: "url(" + slide01 + ")" }}>
            <div className="container">
              <div className="slideshow__description">
                <h1 className="slideshow__title">lorem ipsum.</h1>
                <div className="slideshow__text">
                  <p>Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.</p>
                </div>
              </div>
            </div>
          </div>{/*slideshow__item*/}
        </div>

        <div>
          <div className="slideshow__item" style={{ backgroundImage: "url(" + slide02 + ")" }}>
            <div className="container">
              <div className="slideshow__description">
                <h1 className="slideshow__title">lorem ipsum.</h1>
                <div className="slideshow__text">
                  <p>Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.</p>
                </div>
              </div>
            </div>
          </div>{/*slideshow__item*/}
        </div>

        <div>
          <div className="slideshow__item" style={{ backgroundImage: "url(" + slide03 + ")" }}>
            <div className="container">
              <div className="slideshow__description">
                <h1 className="slideshow__title">lorem ipsum.</h1>
                <div className="slideshow__text">
                  <p>Consectetur adipiscing elit. Nulla condimentum tortor sem, in semper nisl bibendum eu.</p>
                </div>
              </div>
            </div>
          </div>{/*slideshow__item*/}
        </div>

      </Slider>
    )
  }
}
export default Slideshow;

