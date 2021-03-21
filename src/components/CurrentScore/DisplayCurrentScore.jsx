import React from "react";
import PropTypes from "prop-types";
import "./DisplayCurrentScore.css";

export default function DisplayCurrentScore({ handlePlayAgainClick }) {
  let allGameResults = sessionStorage.getItem("gameResults")
    ? sessionStorage.getItem("gameResults")
    : "[]";
  allGameResults = JSON.parse(allGameResults);
  const count = document.getElementById("spnTotalScore").getAttribute("count");
  const currentScore = count ? count : 0;
  const isHighScore = allGameResults.find((e) => e <= currentScore);

  return (
    <div className="final-score-container">
      <div className="final-score-info">
        <h2 className="score-game-font">SCORE: GAME {allGameResults.length}</h2>
        <h1 className="score-time-font">{document.getElementById("spnTotalScore").innerHTML}</h1>
        <h1 className={isHighScore ? "visible" : "hidden"}>New High Score</h1>
      </div>
      <div className="inline-flex pointer m-1" onClick={handlePlayAgainClick}>
        <div className="reload"></div>
        <div className="info crossdiv">PLAY AGAIN</div>
      </div>
    </div>
  );
}

DisplayCurrentScore.propTypes = {
  handlePlayAgainClick: PropTypes.func,
};

DisplayCurrentScore.defaultProps = {
  handlePlayAgainClick: () => {},
};
