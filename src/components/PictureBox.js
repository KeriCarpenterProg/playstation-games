import React from "react";
import games from "../utils/helpers";
import "materialize-css/dist/css/materialize.min.css";
import { Slide, Slider, Caption } from "react-materialize";

class PictureBox extends React.Component {
  state = {
    games: games,
  };
  componentDidMount() {}

  render() {
    const { games } = this.state;
    const { activeGame } = this.props;
    const a = games[activeGame].screenshots;
    const b = games[activeGame].name;
    const urls = a.map((value, index) => (
      <Slide key={index} image={<img alt="" src={value} />}>
        <Caption placement="left">
          <h3>This is a screenshot number {index}</h3>
          <h5 className="light grey-text text-lighten-3">The game is {b}</h5>
        </Caption>
      </Slide>
    ));
    return (
      <div>
        <section>
          <Slider
            fullscreen={false}
            options={{
              duration: 500,
              height: 400,
              indicators: true,
              interval: 6000,
            }}
          >
            {urls}
          </Slider>
        </section>
      </div>
    );
  }
}

export default PictureBox;
