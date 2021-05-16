import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setActiveCity } from "../actions";

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };
  render() {
    return (
      <div
        className="list-group-item"
        onClick={this.handleClick}
        role="link"
        tabIndex={this.props.tabIndex + 1}
      >
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
