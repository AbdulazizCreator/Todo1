import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Main.scss";
import { Link } from "react-router-dom";
import me from "./me.jpg";
class MainBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    if (window.innerWidth <= 992) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
    console.log(this.state.open);
  }

  toggle = () => {
    <NavUL ulOpen={this.state.open}/>
  }

  render() {
    return (
      <div className="Mainbar">
        <div className="container">
          <div className="NavbarRow">
            <div style={this.state.open ? { flex: "10%" } : { flex: "50%" }}>
              {this.state.open ? (
                <button onClick={this.toggle}>
                  <i className="fas fa-bars"></i>
                </button>
              ) : (
                <NavUL />
              )}
            </div>
            <div
              style={this.state.open ? { flex: "90%" } : { flex: "50%" }}
              className="second"
            >
              <div className="search">
                <i className="fas fa-search"></i>
              </div>
              <div className="bell">
                <i class="fas fa-bell"></i>
              </div>
              <div className="person">
                <div className="person-img">
                  <img src={me} alt=""></img>
                </div>
                <div className="person-data">
                  <div>
                    <h3>Muhammad Tojiyev</h3>
                    <p>Tarif: 6 OY | 07.09.2019</p>
                  </div>
                </div>
              </div>
              <div className="person-more">
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const NavUL = (props) => {
  return (
    <ul className={props.ulOpen ? "ButtonNav": ""}>
      <li>
        <Link to="/">
          <span>Code</span> <span>Box</span>
        </Link>
      </li>
      <li>
        <Link to="/">Loyiha haqida</Link>
      </li>
      <li>
        <Link to="/">Dasturlash tillari</Link>
      </li>
      <li>
        <Link to="/">Narxlar</Link>
      </li>
    </ul>
  );
};

export default MainBar;
