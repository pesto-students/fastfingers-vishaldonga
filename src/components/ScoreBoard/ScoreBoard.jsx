import React from "react";
import { convertTimeToMMSS } from "../../util";
import "./ScoreBoard.css";

export default function ScoreBoard() {
  let allGameResults = sessionStorage.getItem("scores")
    ? sessionStorage.getItem("scores")
    : "[]";
  allGameResults = JSON.parse(allGameResults);
  const bestScore = Math.max(...allGameResults);
  const content = allGameResults.map((time, i) => (
    <div key={i}>
      <span className={bestScore === time ? "show" : "hide"}>
        Personal Best
      </span>
      <div>
        <h4 className="game-score">Game {i}: {convertTimeToMMSS(time)}</h4>
      </div>
    </div>
  ));

  return (
    <div className="scoreboard">
      <h2>SCORE BOARD</h2>
      {content}
    </div>
  );
}
