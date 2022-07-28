import React, { useState, useEffect } from "react";

import lightimg from "../Assets/lightimg.png";
import darkimg from "../Assets/darkimg.png";
import { connect } from "react-redux";
import { ThemeMode } from "../Redux/Actions";
const Home = (props) => {
  const [showMode, setShowMode] = useState(false);

  useEffect(() => {
    console.log(props.mode, "props.mode");
    if (props.mode) {
      document.body.classList.remove("black");
      document.body.classList.add("white");
      return;
    }

    document.body.classList.remove("white");
    document.body.classList.add("black");

    return () => {};
  }, [props.mode]);

  const points = [
    {
      id: 1,
      text: " Pakistan officially the Islamic Republic of Pakistan is a country in South Asia. It is the world's fifth-most populous country,",
    },
    {
      id: 2,
      text: " Pakistan officially the Islamic Republic of Pakistan is a country in South Asia. It is the world's fifth-most populous country,",
    },
    {
      id: 3,
      text: " Pakistan officially the Islamic Republic of Pakistan is a country in South Asia. It is the world's fifth-most populous country,",
    },
    {
      id: 4,
      text: " Pakistan officially the Islamic Republic of Pakistan is a country in South Asia. It is the world's fifth-most populous country,",
    },
  ];

  let styles = {
    bgwhite: "#FFF",
    bgblack: "#000",
    bgteal: "#8dcdcd",
  };

  const HandlTheme = () => {
    props.ThemeMode(!props.mode);
    if (props.mode) {
      document.body.classList.remove("black");
      document.body.classList.add("white");
      return;
    }
    document.body.classList.remove("white");
    document.body.classList.add("black");
  };

  return (
    <div>
      <ul>
        <li className="nav-item">
          <button
            style={{ display: showMode === false ? "block" : "none" }}
            className="toggle_button"
            onClick={() => {
              HandlTheme();
            }}
          >
            <img
              src={props.mode ? lightimg : darkimg}
              style={{
                width: "35px",
              }}
              alt="..."
            />
          </button>
        </li>
      </ul>
      <div className="points">
        <h3
          style={{
            color: props.mode ? styles.bgblack : styles.bgwhite,
          }}
        >
          WELCOME TO PAKISTAN
        </h3>

        <ul className="ul_points">
          {points.map((item) => (
            <li
              key={item.id}
              className="li_points"
              style={{
                color: props.mode ? styles.bgblack : styles.bgteal,
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "state!!!!!");
  return {
    mode: state.mode.themeMode,
  };
};

export default connect(mapStateToProps, {
  ThemeMode,
})(Home);
