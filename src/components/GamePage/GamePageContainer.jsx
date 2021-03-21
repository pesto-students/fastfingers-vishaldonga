import React, { useState } from "react";
import UserInfo from "./../UserInfo/UserInfo";
import Score from "./../CurrentScore/Score";
import ScoreBoard from "./../ScoreBoard/ScoreBoard";
import WordTimerContainer from "./../Word/WordTimerContainer";
import DisplayCurrentScore from "./../CurrentScore/DisplayCurrentScore";
import "./GamePage.css";

export default function GamePageContainer() {
  const [isGameOver, setGameOver] = useState(false);
  const handleGameOver = () => {
    setGameOver(true);
  };
  const handleQuitGame = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  const handlePlayAgainClick = () => {
    setGameOver(false);
  };
  if (isGameOver) {
    return (
      <div className="alignleft">
        <div className="flex">
          <UserInfo />
          <Score isGameOver={isGameOver} />
        </div>
        <DisplayCurrentScore handlePlayAgainClick={handlePlayAgainClick} />
        <div className="flex pointer" onClick={handleQuitGame}>
          <div className="crossicon"></div>
          <div className="info crossdiv">QUIT</div>
        </div>
      </div>
    );
  }
  return (
    <div className="alignleft">
      <div className="flex">
        <UserInfo />
        <Score isGameOver={isGameOver} />
      </div>
      <div className="flex">
        <ScoreBoard />
        <div className="flexcol flexone">
          <WordTimerContainer handleGameOver={handleGameOver} />
        </div>
      </div>
      <div className="flex pointer" onClick={handleGameOver}>
        <div className="crossicon"></div>
        <div className="info crossdiv">STOP GAME</div>
      </div>
    </div>
  );
}
