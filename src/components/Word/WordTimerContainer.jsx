import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Timer from "./../Timer/Timer";
import WordPlay from "./WordPlay";
import { dictionary } from "../../dictionary";
import "./WordTimeContainer.css";

const levelMap = new Map([
  ["EASY", 1],
  ["MEDIUM", 1.5],
  ["HARD", 2],
]);

export default function WordTimerContainer({
  handleGameOver,
  changeGameLevel,
}) {
  const [word, setWord] = useState("");
  const [time, setTime] = useState(0);
  const [errorMessage] = useState("");

  const initialDifficultyFactor = levelMap.get(
    sessionStorage.getItem("level")
  );
  const [difficultyFactor, setDifficultyFactor] = useState(
    initialDifficultyFactor
  );

  const wordLength = (word) => {
    if (difficultyFactor < 1.5) {
      return word.length <= 4;
    } else if (difficultyFactor >= 1.5 && difficultyFactor < 2) {
      return word.length > 4 && word.length <= 8;
    }
    return word.length > 8;
  };

  const getWord = () => {
    const word = dictionary.filter(wordLength);
    const randomNumber = Math.floor(Math.random() * word.length);
    setWord(word[randomNumber].toUpperCase());
    const wordTime = word[randomNumber].length / difficultyFactor;
    setTime(wordTime > 2 ? wordTime : 2);
    setDifficultyFactor(difficultyFactor + 0.01);
    if (difficultyFactor >= 1.5 && difficultyFactor < 1.51) {
      sessionStorage.setItem("level", "MEDIUM");
      changeGameLevel();
    } else if (difficultyFactor >= 2 && difficultyFactor < 2.01) {
      sessionStorage.setItem("level", "HARD");
      changeGameLevel();
    }
  };

  useEffect(getWord, [errorMessage]);

  if (errorMessage) {
    return <h3>{errorMessage}</h3>;
  }
  return (
    <div className="flex-col flex-one">
      <Timer time={time} handleGameOver={handleGameOver} />
      <WordPlay word={word} getWord={getWord} />
    </div>
  );
}

WordTimerContainer.propTypes = {
  handleGameOver: PropTypes.func,
  changeGameLevel: PropTypes.func,
};

WordTimerContainer.defaultProps = {
  handleGameOver: () => {},
  changeGameLevel: () => {},
};
