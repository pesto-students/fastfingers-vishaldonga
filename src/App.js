import React, { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";
import GamePageContainer from "./components/GamePage/GamePageContainer";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {
    setLoggedIn(true);
  };
  if (!isLoggedIn) {
    return (
      <div className="App">
        <MainPage handleLogIn={handleLogIn} />
      </div>
    );
  }
  return (
    <div className="App">
      <GamePageContainer />
    </div>
  );
}

export default App;
