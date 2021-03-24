import React, { useState } from "react";
import PropTypes from "prop-types";
import "./WordTimeContainer.css";

export default function WordPlay({ word, getWord }) {
  const [matchedWordIndex, setMatchedWordIndex] = useState(-1);

  const handleWordInput = (e) => {
    const { target: { value } = {} } = e;
    const element = document.getElementById("wordText");

    if (word.substring(0, value.length).match(value.toUpperCase())) {
      element.innerHTML = `<span class="green">${word.substring(
        0,
        value.length
      )}</span>${word.substring(value.length)}`;
      setMatchedWordIndex(value.length);
    } else {
      element.innerHTML = `<span class="green">${word.substring(
        0,
        matchedWordIndex
      )}</span><span class="darkviolet">${word.substring(
        matchedWordIndex,
        value.length
      )}</span>${word.substring(value.length)}`;
    }
    if (word === value.toUpperCase()) {
      getWord();
      e.target.value = "";      
      setMatchedWordIndex(-1);
    }
  };

  return (
    <div className="word-play flex-col">
      <h1 id="wordText" className="white-color m-1">
        {word}
      </h1>
      <input
        type="text"
        className="align-center"
        onChange={handleWordInput}
        autoComplete="off"
        autoFocus
      />
    </div>
  );
}

WordPlay.propTypes = {
  word: PropTypes.string.isRequired,
  getWord: PropTypes.func,
};

WordPlay.defaultProps = {
  getWord: () => {},
};
