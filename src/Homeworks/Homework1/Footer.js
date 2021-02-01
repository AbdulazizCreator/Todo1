import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div id="Footer">
        <div className="container">
          <div className="footerLogo">
            <h1>
              Code <span>Box..</span>
            </h1>
            <p>© “Personal Development Process” MCHJ</p>
          </div>
          <div className="footerNav">
            <ul>
              <li>
                <Link to="/">Loyiha haqida</Link>
              </li>
              <li>
                <Link to="/">Dasturlash tillari</Link>
              </li>
              <li>
                <Link to="/">Narxlar</Link>
              </li>
              <li>
                <Link to="/">Biz haqimizda</Link>
              </li>
            </ul>
          </div>
          <div className="massMedia">
            <div>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-telegram"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
