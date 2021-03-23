import React, { useState } from "react";
import { ReactComponent as Keyboard } from "./../../images/icon-keyboard.svg";
import PropTypes from "prop-types";
import "./MainPage.css";

export default function MainPage({ handleLogIn }) {
  const [name, setName] = useState(localStorage.Name ? localStorage.Name : "");
  const [difficultyLevel, setDifficultyLevel] = useState("EASY");
  const handleNameChange = (e) => {
    const { target: { value } = {} } = e;
    if (value === "") {
      document.getElementById("validName").classList.remove("hidden");
      document.getElementById("validName").classList.add("visible");
    } else {
      document.getElementById("validName").classList.remove("visible");
      document.getElementById("validName").classList.add("hidden");
    }
    setName(value.toUpperCase());
  };
  const handleDifficultyLevelChange = (e) => {
    const { target: { value } = {} } = e;
    setDifficultyLevel(value);
  };
  const handleSubmit = (handleLogIn) => {
    const username = document.getElementById("username");
    if (username.value === "") {
      username.focus();
      document.getElementById("validName").classList.remove("hidden");
      document.getElementById("validName").classList.add("visible");
      return;
    }
    sessionStorage.clear();
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("level", difficultyLevel);
    localStorage.Name = name;
    handleLogIn();
  };
  return (
    <div className="MainPage">
      <div>
        <Keyboard className="keyboard" />
      </div>
      <div>
        <h1>fast fingers</h1>
      </div>
      <div>
        <p>the ultimate typing game</p>
      </div>
      <div className="form-div">
        <input
          type="text"
          name="name"
          id="username"
          placeholder="TYPE YOUR NAME"
          autoComplete="off"
          value={name}
          onChange={handleNameChange}
        />
        <label id="validName" className="align-left ml-1 hidden">
          *Please enter your name to start game.
        </label>
        <select
          name="difficulty"
          id="difficulty"
          onChange={handleDifficultyLevelChange}
        >
          <option value="EASY" defaultValue>
            EASY
          </option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HARD">HARD</option>
        </select>
        <div
          className="start-game pointer"
          onClick={() => handleSubmit(handleLogIn)}
        >
          <div className="play"></div>
          <button className="play-button">START GAME</button>
        </div>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  handleLogIn: PropTypes.func,
};

MainPage.defaultProps = {
  handleLogIn: () => {},
};
