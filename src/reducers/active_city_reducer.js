export default function (state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case "ACTIVE_CITIES":
      return action.payload;
    default:
      return state;
  }
}
