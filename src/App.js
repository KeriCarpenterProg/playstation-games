import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BottomMiddle from "./components/BottomMiddle";
import { callFourEndpoints } from "./components/FetchGameData";
import BottomOfPage from "./components/BottomOfPage";
import SingleGamePage from "./components/SingleGamePage";
import { SingleGamePage2 } from "./components/SingleGamePage2";
import { HomePage } from "./components/HomePage";
import { Nav } from "./components/Nav";

class App extends React.Component {
  state = {
    activeGame: 0,
  };
  componentDidMount() {
    callFourEndpoints().then(this.setState({ loaded: true }));
  }
  clickEvent = (index) => {
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
        <Nav />
        {/* <Header activeGame={activeGame} clickEvent={this.clickEvent} /> */}
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/games"
            element={<SingleGamePage activeGame={activeGame} />}
          ></Route>
          <Route
            path="/games/:activeGame"
            element={<SingleGamePage2 />}
          ></Route>
        </Routes>
        <BottomMiddle />
        <BottomOfPage />
      </div>
    );
  }
}

export default App;
