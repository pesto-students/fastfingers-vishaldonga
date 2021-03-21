import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WordTimeContainer.css";

export default function WordPlay({ word, checkWordCorrect }) {
  const [matchedWordIndex, setMatchedWordIndex] = useState(-1);

  const handleWordInput = (e) => {
    const { target: { value } = {} } = e;
    if (word.substring(0, value.length).match(value.toUpperCase())) {
      const element = document.getElementById("wordText");
      element.innerHTML = `<span class="green">${word.substring(
        0,
        value.length
      )}</span>${word.substring(value.length)}`;
      setMatchedWordIndex(value.length);
    } else {
      const element = document.getElementById("wordText");
      element.innerHTML = `<span class="green">${word.substring(
        0,
        matchedWordIndex
      )}</span><span class="darkviolet">${word.substring(
        matchedWordIndex,
        value.length
      )}</span>${word.substring(value.length)}`;
    }
    if (word === value.toUpperCase()) {
      checkWordCorrect();
      e.target.value = "";
    }
  };

  return (
    <div className="word-play flex-col">
      <h1 id="wordText" className="white-color m-1">
        {word}
      </h1>
      <input type="text" className="align-center" onChange={handleWordInput} />
    </div>
  );
}

WordPlay.propTypes = {
  word: PropTypes.string.isRequired,
  checkWordCorrect: PropTypes.func,
};
