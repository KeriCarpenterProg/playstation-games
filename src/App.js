import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BottomMiddle from "./components/BottomMiddle";
import { callFourEndpoints } from "./components/FetchGameData";
import BottomOfPage from "./components/BottomOfPage";
import { SingleGamePage2 } from "./components/SingleGamePage2";
import { HomePage } from "./components/HomePage";
import { Nav } from "./components/Navigation";

class App extends React.Component {
  state = {};
  componentDidMount() {
    console.log("It's going to call callFourEndpoints");
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
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Header activeGame={activeGame} clickEvent={this.clickEvent} /> */}
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />}></Route>
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
