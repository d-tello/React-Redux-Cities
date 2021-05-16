import cities from "../cities";

function setCities() {
  return {
    type: "SET_CITIES",
    payload: cities,
  };
}

export { setCities };

function setActiveCity(city) {
  return {
    type: "ACTIVE_CITIES",
    payload: city,
  };
}

export { setActiveCity };
