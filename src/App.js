import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Text from './components/Text';
import { callFourEndpoints } from './components/FetchGameData';

class App extends React.Component {
  state = {
    activeGame: 0
  }
  componentDidMount() {
    callFourEndpoints().then(this.setState({ loaded: true }));
    
  }
  clickButton = (index) => {
    // console.log("I clicked the button and the index value is " + index);
    this.setState({ activeGame: index }
      // , () =>
      // console.log("This is the value of activeGame " + this.state.activeGame)
    );
  }
  
  render() {
    const {activeGame, loaded } = this.state;

    return (
      <div className="App">
        <Header 
          activeGame={activeGame}
          clickEvent={this.clickButton}
        />
        <Text activeGame={activeGame} />
        
      </div>
    );
  }
}

export default App;
