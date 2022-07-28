export const reducer = (state, action) => {
  console.log(action, "action!!!!!!!!!!");
  switch (action.type) {
    case "Dark":
      return {
        mode: action.payload,
      };
    case "light":
      return {
        mode: action.payload,
      };
    default:
      return state;
  }
};
