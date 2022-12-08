import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BottomMiddle from "./components/BottomMiddle";
import { callFourEndpoints } from "./components/FetchGameData";
import BottomOfPage from "./components/BottomOfPage";
import SingleGamePage from "./components/SingleGamePage";
import PopularGamesSlider from "./components/PopularGamesSlider";

class App extends React.Component {
  state = {
    activeGame: 0,
  };
  componentDidMount() {
    callFourEndpoints().then(this.setState({ loaded: true }));
  }
  clickButton = (index) => {
    console.log("I clicked the button and the index value is " + index);
    this.setState(
      { activeGame: index }
      // , () =>
      // console.log("This is the value of activeGame " + this.state.activeGame)
    );
  };
  // I had put "{ activeGame, loaded }" in before but it looks like its not needed
  render() {
    const { activeGame } = this.state;
    return (
      <div className="App">
        <Header activeGame={activeGame} clickEvent={this.clickButton} />
        <Routes>
          <Route path="*" element={<PopularGamesSlider />} />
          <Route path="/" element={<PopularGamesSlider />}></Route>
          <Route
            path="/games"
            element={<SingleGamePage activeGame={activeGame} />}
          ></Route>
        </Routes>
        <BottomMiddle />
        <BottomOfPage />
      </div>
    );
  }
}

export default App;
