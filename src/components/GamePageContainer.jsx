import React, {useState} from "react";
import UserInfo from "./UserInfo";
import Score from "./Score";
import ScoreBoard from "./ScoreBoard";
import WordTimerContainer from "./WordTimerContainer";

export default function GamePageContainer() {  
  const [isGameOver, setGameOver] = useState(false);
  const handleGameOver = () => {
    setGameOver(true);
  }
  return (
    <div className="alignleft">
      <div className="flex">
        <UserInfo />
        <Score isGameOver={isGameOver}/>
      </div>
      <div className="flex">
        <ScoreBoard />
        <div className="flexcol flexone">          
          <WordTimerContainer handleGameOver={handleGameOver} />         
        </div>
      </div>

      <div className="flex">
        <div className="crossicon"></div>
        <div className="info crossdiv">STOP GAME</div>
      </div>
    </div>
  );
}
