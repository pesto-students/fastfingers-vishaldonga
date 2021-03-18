import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { convertTimeToMilli, convertTimeToProgress } from "../util";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";

export default function Timer({ time, handleGameOver }) {
  const convertedTime = time * 100;
  let [currentCount, setCount] = useState(convertedTime);
  let timer = () => setCount(currentCount - 1);

  useEffect(() => {
    setCount(convertedTime);
  }, [convertedTime]);

  useEffect(() => {
    if (currentCount <= 0) {
      handleGameOver();
      return;
    }
    const intervalId = setInterval(timer, 6);
    return () => clearInterval(intervalId);
  }, [currentCount]);

  return (
    <div className="percent">
      <CircularProgressBar
        progress={convertTimeToProgress(currentCount, time)}
      />
      <div className="number">
        <h2>{convertTimeToMilli(currentCount)}</h2>
      </div>
    </div>
  );
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  handleGameOver: PropTypes.func
};
Timer.defaultProps = {
  time: 0,
  handleGameOver: () => {}
};
