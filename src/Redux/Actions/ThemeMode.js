export const ThemeMode = (data) => {
  console.log(data, "data in action");
  return (dispatch) => {
    dispatch({ type: "THEME_MODE", payload: data });
  };
};
