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
    const { name, difficultyLevel } = this.state;
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
        <form method="POST" onSubmit={() => this.handleSubmit(handleLogIn)}>
          <input
            type="text"
            name="name"
            placeholder="TYPE YOUR NAME"
            onChange={this.handleNameChange}
            required
          />
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
          <div className="startgame">
            <div className="play"></div>
            <button className="playbutton">START GAME</button>
          </div>
        </form>
      </div>
    );
  }
}
