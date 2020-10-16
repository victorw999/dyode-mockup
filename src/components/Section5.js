import React, { Component } from "react";
import Slider from "react-slick";

export default class Section5 extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            // dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="section5">
        <div className="container">
          <div className="title">Follow Us On Instagram!</div>
          <Slider {...settings}>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/social/Social 1.png")} />
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/social/Social 2.png")} />
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/social/Social 3.png")} />
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/social/Social 4.png")} />
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/social/Social 5.png")} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
