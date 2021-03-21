import React from "react";

export default function UserInfo() {
  const name = sessionStorage.getItem("name");
  const initialLevel = sessionStorage.getItem("difficultyLevel");
  return (
    <div className="userinfo flexone">
      <div className="flex">
        <div className="usericon"></div>
        <div className="info">
          {name.toUpperCase()}
        </div>
      </div>
      <div className="flex">
        <div className="gamepad"></div>
        <div className="info">
          LEVEL : {initialLevel.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
