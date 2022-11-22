import React from "react";
import games from "../utils/helpers";
import 'materialize-css/dist/css/materialize.min.css';
import { Slide, Slider, Caption } from 'react-materialize';

class PictureBox extends React.Component {
    state = {
      games: games,
    };
    componentDidMount() {
    }
  
    render() {
      const { games } = this.state;
      const {activeGame} = this.props;
      const a = games[activeGame].screenshots;
      const b = games[activeGame].name;
      const urls = a.map((value, index) => (
        <Slide key={index} image={<img alt="" src={value}/>}>
        <Caption placement="left">
          <h3>
            This is a screenshot number {index}
          </h3>
          <h5 className="light grey-text text-lighten-3">
            The game is {b}
          </h5>
        </Caption>
        </Slide>
    ));
      return (
        <div>
        <section className="move-top">
        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
        {urls}
          </Slider>
        </section>
          <section
            id="carousel"
            className="move-top section red lighten-1 white-text scrollspy"
          >
            <div className="container">
              <div className="row">
                  <h5>I want this to be left aligned</h5>

                  <div className="col s12">This div is 12-columns wide on all screen sizes</div>
                  <div className="col s6">6-columns (one-half).  Lorem Ipsum dolor et alignment.  The quick
                  brown fox jumped over the lazy dog.  This quick brown fox jumped over the lazy dog.</div>
                  <div className="col s6">6-columns (one-half).    Lorem Ipsum dolor et alignment.  The quick
                  brown fox jumped over the lazy dog.  This quick brown fox jumped over the lazy dog.</div>
            </div>
          </div>
        </section>
        <section
            id="pictures"
            className="move-top section green darken-2 white-text scrollspy"
        >
            <div className="container">
                <div className="row">
                    <h5>Is this a new container?</h5>
                    <div className="col s6">
                        This should cover 6 columns
                    </div>
                    <div className="col s6">
                        This should cover 6 columns
                    </div>
                </div>
            </div>
        </section>

      </div>
    );
  }
}

export default PictureBox;