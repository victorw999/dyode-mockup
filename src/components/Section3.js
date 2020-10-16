import React, { Component } from "react";
import Slider from "react-slick";

export default class Section3 extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="section3">
        <div className="container">
          <div className="title">New Arrivals</div>
          <Slider {...settings}>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>

            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>
            <div className="slide">
              <div class="card">
                <div class="card-image">
                  <img src={require("../assets/img/s3/product.png")} />
                </div>
                <div class="card-content">
                  <h3 class="heading1">Product Title</h3>
                  <p className="description">Women's T-Shirt</p>
                  <h3 className="price">$19.99</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
