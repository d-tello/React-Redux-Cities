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
    type: "SET_ACTIVE_CITY",
    payload: city,
  };
}

export { setActiveCity };
