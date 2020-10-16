import React, { Component } from "react";

export default class Section6 extends Component {
  render() {
    return (
      <div className="section6">
        <div className="container">
          <div className="title">
            <img src={require("../assets/img/mail.png")} alt="mail" />
            Signup and Stay Connected!
          </div>
          <div className="row">
            <div class="col s12 m6">
              <div className="description">
                Sign up for the newsletter and get 20% off! Gain access to
                exclusive offers and be the first to know when new stuff drops!
              </div>
            </div>

            <div class="col s12 m6">
              <form className="signupform" action="">
                <input
                  className="mail"
                  type="text"
                  value="Your Email Address"
                />
                <input
                  className="subscribeBtn"
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
