import React, { Component } from "react";

export default class Section4 extends Component {
  render() {
    return (
      <div className="section4">
        <img
          src={require("../assets/img/Hero Image 2.png")}
          alt="Hero Image 1"
        />
        <div className="content">
          <h2 className="heading1">Title Goes Here</h2>
          <h3 className="heading2">Tagline will go right here</h3>
          <button>Shop Now</button>
        </div>
      </div>
    );
  }
}
