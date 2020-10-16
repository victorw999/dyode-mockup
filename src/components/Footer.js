import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-left">
            <div className="block1">
              <input
                class="quick-collapsible-header"
                type="checkbox"
                id="title1"
              />
              <label for="title1">Customer Service</label>
              <div class="quick-collapsible-content">
                <a href="" class="footerlink">
                  Accessibilty
                </a>
                <a href="" class="footerlink">
                  Contact Us
                </a>
                <a href="" class="footerlink">
                  Return Policy
                </a>
                <a href="" class="footerlink">
                  FAQ
                </a>
                <a href="" class="footerlink">
                  Gift Certificates
                </a>
                <a href="" class="footerlink">
                  Wishlist
                </a>
              </div>
            </div>
            <div className="block2">
              <input
                class="quick-collapsible-header"
                type="checkbox"
                id="title2"
              />
              <label for="title2">Company</label>
              <div class="quick-collapsible-content">
                <a href="" class="footerlink">
                  About Us
                </a>
                <a href="" class="footerlink">
                  Careers
                </a>
                <a href="" class="footerlink">
                  Press
                </a>
                <a href="" class="footerlink">
                  Affilates
                </a>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h4 className="title">Follow Us</h4>
            <div className="social-icons">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
