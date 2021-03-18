import React from "react";

export default function UserInfo() {
  return (
    <div className="userinfo flexone">
      <div className="flex">
        <div className="usericon"></div>
        <div className="info">
          {sessionStorage.getItem("name").toUpperCase()}
        </div>
      </div>
      <div className="flex">
        <div className="gamepad"></div>
        <div className="info">
          LEVEL : {sessionStorage.getItem("difficultyLevel").toUpperCase()}
        </div>
      </div>
    </div>
  );
}
