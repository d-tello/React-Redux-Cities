import React from "react";
import { connect } from "react-redux";

const ActiveCity = (props) => {
  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={url} alt="" width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
  };
}

export default connect(mapStateToProps)(ActiveCity);
