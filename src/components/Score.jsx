import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { convertTimeToMMSS }from "../util";

export default function Score({ isGameOver }) {
  const [currentCount, setCount] = useState(0);
  let timer = () => setCount(currentCount + 1);

  useEffect(() => {
    if (isGameOver) {
      const previousGameResults = sessionStorage.getItem("gameResults")
        ? sessionStorage.getItem("gameResults")
        : [];
      previousGameResults.push(currentCount);
      sessionStorage.setItem("gameResults", previousGameResults);
      return;
    }
    const intervalId = setInterval(timer, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="userinfo">
      <div className="flex">
        <div className="info">fast fingers</div>
      </div>
      <div className="flex">
        <div className="info">
          <span>SCORE : {convertTimeToMMSS(currentCount)}</span>
        </div>
      </div>
    </div>
  );
}

Score.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
};

Score.defaultProps = {
  isGameOver: false,
};
