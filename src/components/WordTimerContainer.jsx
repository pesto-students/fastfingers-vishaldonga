import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Timer from "./Timer";
import WordPlay from "./WordPlay";
import { dictionary } from "../dictionary.js";

export default function WordTimeContainer({ handleGameOver }) {
  const [word, setWord] = useState("");
  const [time, setTime] = useState(0);
  const [errorMessage] = useState("");
  const [difficultyFactor, setDifficultyFactor] = useState(1.0);

  const checkWordCorrect = () => {
    setDifficultyFactor(difficultyFactor + 0.01);
    const filteredResponse = dictionary.filter((word) => word.length <= 4);
    const randomNumber = Math.floor(Math.random() * filteredResponse.length);
    setWord(filteredResponse[randomNumber].toUpperCase());
    const wordTime = filteredResponse[randomNumber].length / difficultyFactor;
    setTime(wordTime > 2 ? wordTime : 2);
  };

  useEffect(checkWordCorrect, [errorMessage]);

  if (errorMessage) {
    return <h3>{errorMessage}</h3>;
  }
  return (
    <div className="flexcol flexone">
      <Timer time={time} handleGameOver={handleGameOver} />
      <WordPlay word={word} checkWordCorrect={checkWordCorrect} />
    </div>
  );
}

WordTimeContainer.propTypes = {
  handleGameOver: PropTypes.func,
};

WordTimeContainer.defaultProps = {
  handleGameOver: () => {},
};
