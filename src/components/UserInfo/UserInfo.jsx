import React from "react";
import "./UserInfo.css";

export default function UserInfo() {
  const name = sessionStorage.getItem("name");
  const initialLevel = sessionStorage.getItem("difficultyLevel");
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
