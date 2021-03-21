import React from "react";
import { convertTimeToMMSS } from "../../util";
import "./ScoreBoard.css";

export default function ScoreBoard() {
  let allGameResults = sessionStorage.getItem("gameResults")
    ? sessionStorage.getItem("gameResults")
    : "[]";
  allGameResults = JSON.parse(allGameResults);
  const bestScore = Math.max(...allGameResults);
  const content = allGameResults.map((time, i) => (
    <div key={i}>
      <span className={bestScore === time ? "visible" : "hidden"}>
        Personal Best
      </span>
      <div>
        Game {i}: {convertTimeToMMSS(time)}
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
