import React, { Component } from "react";
import { connect } from "react-redux";

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

function mapStateToProps(state) {
  return {
    setActiveCity: state.setActiveCity,
  };
}

export default connect(mapStateToProps)(City);
