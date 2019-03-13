import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Debt from "../components/Debt";
import NetWorth from "../components/NetWorth";

class index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="roboto">
        <Header />
        <NetWorth />
        <Debt />
      </div>
    );
  }
}

export default index;
