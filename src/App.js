import React, { Component } from 'react';
import MainPage from './components/MainPage/MainPage';
import './App.css';
import GamePageContainer from './components/GamePage/GamePageContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false,
    }
  }
  handleLogIn = () => {
    this.setState({ isLoggedIn: true });
  }
  render() {
    const  { isLoggedIn } = this.state;
    if (!isLoggedIn) {
      return (
        <div className="App">
          <MainPage handleLogIn = {this.handleLogIn} />
        </div>
      );
    }
    return (<div className="App">
      <GamePageContainer />
    </div>);
  }
}

export default App;
