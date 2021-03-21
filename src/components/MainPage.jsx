import React, { Component } from "react";
import { ReactComponent as Keyboard } from "./../images/icon-keyboard.svg";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      difficultyLevel: "easy",
    };
  }
  handleNameChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ name: value });
  };
  handleDifficultyLevelChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ difficultyLevel: value });
  };
  handleSubmit = (handleLogIn) => {
    const username = document.getElementById("username");
    if (username.value === "") {
      username.focus();
      document.getElementById("validName").classList.remove("hidden");
      document.getElementById("validName").classList.add("visible");
      return;
    }
    const { name, difficultyLevel } = this.state;
    sessionStorage.clear();
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("difficultyLevel", difficultyLevel);
    handleLogIn();
  };
  render() {
    const { handleLogIn } = this.props;
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
            onChange={this.handleNameChange}
          />
          <label id="validName" className="alignleft w-33 hidden">
            *Please enter your name to start game.
          </label>
          <select
            name="difficulty"
            id="difficulty"
            onChange={this.handleDifficultyLevelChange}
          >
            <option value="easy" defaultValue>
              EASY
            </option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
          </select>
          <div
            className="startgame pointer"
            onClick={() => this.handleSubmit(handleLogIn)}
          >
            <div className="play"></div>
            <button className="playbutton">START GAME</button>
          </div>
        </div>
      </div>
    );
  }
}
