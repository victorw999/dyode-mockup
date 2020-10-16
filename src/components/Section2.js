import React, { Component } from "react";

export default class Section2 extends Component {
  render() {
    return (
      <div className="section2">
        <div className="row">
          <div class="col s6 m4">
            <div class="card">
              <div class="card-image">
                <img src={require("../assets/img/s2/Womens Image.png")} />
              </div>
              <div class="card-content">
                <h2 class="heading1">Womens</h2>
              </div>
            </div>
          </div>

          <div class="col s6 m4">
            <div class="card">
              <div class="card-image">
                <img src={require("../assets/img/s2/Mens Image.png")} />
              </div>
              <div class="card-content">
                <h2 class="heading1">Mens</h2>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img src={require("../assets/img/s2/Accessories Image.png")} />
              </div>
              <div class="card-content">
                <h2 class="heading1">Accessories</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
