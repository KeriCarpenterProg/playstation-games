import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";
import SlickSlider from "./components/SlickSlider";
import { callFourEndpoints } from "./components/FetchGameData";

class App extends React.Component {
  state = {
    activeGame: 0,
  };
  componentDidMount() {
    callFourEndpoints().then(this.setState({ loaded: true }));
  }
  clickButton = (index) => {
    // console.log("I clicked the button and the index value is " + index);
    this.setState(
      { activeGame: index }
      // , () =>
      // console.log("This is the value of activeGame " + this.state.activeGame)
    );
  };

  render() {
    const { activeGame, loaded } = this.state;
    return (
      <div className="App">
        {/* Taking this out for the moment. */}
        <Header activeGame={activeGame} clickEvent={this.clickButton} />
        <h5 className="black-text">
          <Link to="/">Popular Games</Link>
        </h5>
        <h5 className="black-text">
          <Link to="/games">Single Game</Link>
        </h5>
        <Routes>
          <Route path="/" element={<SlickSlider />} />
          <Route
            path="/games"
            element={<Text activeGame={activeGame} />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
