import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Timer from "./Timer";
import WordPlay from "./WordPlay";

export default function WordTimeContainer({ handleGameOver }) {
  const [word, setWord] = useState("");
  const [time, setTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  let [difficultyFactor, setDifficultyFactor] = useState(1.0);

  const checkWordCorrect = async () => {
    setDifficultyFactor(difficultyFactor + 0.01);
    await fetch("/dictionary.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        const filteredResponse = jsonResponse.filter(
          (word) => word.length <= 4
        );
        const randomNumber = Math.floor(
          Math.random() * filteredResponse.length
        );
        setWord(filteredResponse[randomNumber].toUpperCase());
        const wordTime =
          filteredResponse[randomNumber].length / difficultyFactor;
        setTime(wordTime);
      })
      .catch((error) => {
        setErrorMessage(error.Message);
      });
  };

  useEffect(checkWordCorrect, [errorMessage]);

  if (errorMessage) {
    return <h3>{errorMessage}</h3>;
  }
  return (
    <div className="flexcol flexone">
      <Timer time={time} isGameOver={handleGameOver} />
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
