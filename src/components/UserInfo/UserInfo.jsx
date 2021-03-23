import React, { useEffect } from "react";
import "./UserInfo.css";
import PropTypes from "prop-types";

let initialLevel;

export default function UserInfo({ isGameLevelChanged }) {
  const name = sessionStorage.getItem("name");
  initialLevel = sessionStorage.getItem("difficultyLevel");
  useEffect(() => {
    initialLevel = sessionStorage.getItem("difficultyLevel");
  }, [isGameLevelChanged]);
  return (
    <div className="m-1 flex-one">
      <div className="flex">
        <div className="usericon"></div>
        <div className="info">{name.toUpperCase()}</div>
      </div>
      <div className="flex">
        <div className="gamepad"></div>
        <div className="info">LEVEL : {initialLevel.toUpperCase()}</div>
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  isGameLevelChanged: PropTypes.bool.isRequired,
};

UserInfo.defaultProps = {
  isGameLevelChanged: false,
};
