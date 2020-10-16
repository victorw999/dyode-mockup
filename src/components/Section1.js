import React, { Component } from "react";
import Slider from "react-slick";

export default class Section1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="section1">
        <Slider {...settings}>
          <div className="slide">
            <img
              src={require("../assets/img/Hero Image 1.png")}
              alt="Hero Image 1"
            />
            <div className="content">
              <h2 className="heading1">Title Goes Here</h2>
              <h3 className="heading2">Tagline will go right here</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="slide">
            <img
              src={require("../assets/img/Hero Image 1.png")}
              alt="Hero Image 1"
            />
            <div className="content">
              <h2 className="heading1">Slide Two</h2>
              <h3 className="heading2">Tagline will go right here</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="slide">
            <img
              src={require("../assets/img/Hero Image 1.png")}
              alt="Hero Image 1"
            />
            <div className="content">
              <h2 className="heading1">Slide Three</h2>
              <h3 className="heading2">Tagline will go right here</h3>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="slide">
            <img
              src={require("../assets/img/Hero Image 1.png")}
              alt="Hero Image 1"
            />
            <div className="content">
              <h2 className="heading1">Slide Four</h2>
              <h3 className="heading2">Tagline will go right here</h3>
              <button>Shop Now</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
