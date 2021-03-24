import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { convertTimeToMilli, convertTimeToProgress } from "../../util";
import CircularProgressBar from "./../CircularProgressBar/CircularProgressBar";
import "./Timer.css";

export default function Timer({ time, handleGameOver }) {
  let [currentCount, setCount] = useState(0);
  let timer = () => setCount((currentCount) => currentCount - 1);
  const [initialStateChanged, setInitialStateChanged] = useState(false);

  useEffect(() => {
    if (time > 0) {
      setInitialStateChanged(true);
    }
    setCount(time*100);
  }, [time]);

  useEffect(() => {
    if (currentCount <= 0) {
      if (initialStateChanged) {
        handleGameOver();
      }
      return;
    }
    const intervalId = setInterval(timer, 6);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="timer-container">
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
