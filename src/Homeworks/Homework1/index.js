import React, { Component } from 'react'
import MainBar from "./MainBar";
import Body from "./Body";
import Footer from "./Footer";
export default class index extends Component {
    render() {
        return (
          <div>
            <MainBar />
            <Body />
            <Footer />
          </div>
        );
    }
}
