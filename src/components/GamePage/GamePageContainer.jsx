import React, { useState } from "react";
import UserInfo from "./../UserInfo/UserInfo";
import Score from "./../CurrentScore/Score";
import ScoreBoard from "./../ScoreBoard/ScoreBoard";
import WordTimerContainer from "./../Word/WordTimerContainer";
import DisplayCurrentScore from "./../CurrentScore/DisplayCurrentScore";
import "./GamePage.css";

export default function GamePageContainer() {
  const [isGameOver, setGameOver] = useState(false);
  const [isGameLevelChanged, setGameLevelChanged] = useState(false);

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
  const changeGameLevel = () => {
    setGameLevelChanged((levelChanged) => !levelChanged);
  }
  if (isGameOver) {
    return (
      <div className="align-left">
        <div className="flex">
          <UserInfo isGameLevelChanged={isGameLevelChanged}/>
          <Score isGameOver={isGameOver} />
        </div>
        <DisplayCurrentScore handlePlayAgainClick={handlePlayAgainClick} />
        <div className="inline-flex pointer quit-game" onClick={handleQuitGame}>
          <div className="crossicon"></div>
          <div className="info crossdiv">QUIT</div>
        </div>
      </div>
    );
  }
  return (
    <div className="align-left">
      <div className="flex">
        <UserInfo isGameLevelChanged={isGameLevelChanged}/>
        <Score isGameOver={isGameOver} />
      </div>
      <div className="flex">
        <ScoreBoard />
        <div className="flex-col word-timer-container">
          <WordTimerContainer handleGameOver={handleGameOver} changeGameLevel={changeGameLevel}/>
        </div>
      </div>
      <div className="flex pointer quit-game" onClick={handleGameOver}>
        <div className="crossicon"></div>
        <div className="info crossdiv">STOP GAME</div>
      </div>
    </div>
  );
}
