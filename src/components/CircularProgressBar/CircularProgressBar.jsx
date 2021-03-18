import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./CircularProgressBar.css";

export default function CircularProgressBar({ progress }) {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  const center = 75;
  const radius = 70;
  const circumference = 140 * Math.PI;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = "transition: stroke-dashoffset ease-in-out";
  }, [progress, offset, circumference]);

  return (
    <>
      <svg className="svg">
        <circle className="svg-bg-circle" cx={center} cy={center} r={radius} />
        <circle
          className="svg-main-circle"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset ? offset : 0}
        />
      </svg>
    </>
  );
}

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
CircularProgressBar.defaultProps = {
  progress: 0,
};
