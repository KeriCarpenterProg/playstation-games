import React from "react";
import games from "../utils/helpers";
import PictureBox from "./PictureBox";

class SingleGamePage extends React.Component {
  state = {
    screenshots: [],
    name: "",
    summary: "",
    coverNum: 0,
  };

  render() {
    const { activeGame } = this.props;
    const a = games[activeGame].screenshots;
    const urls = a.map((value, index) => (
      <div className="col s12 m4" key={index}>
        <img src={value} alt={value} width="100%" />
      </div>
    ));
    const b = games[activeGame].videos;
    const video = b.map((value, index) => (
      <div className="col s12 m4" key={index}>
        <div className="video-container">
          <iframe
            title={games[activeGame].name}
            width="560"
            height="315"
            src={value}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ));
    const backgroundImage = games[activeGame].screenshots[0];
    // console.log(`Background image: ${backgroundImage}`);

    return (
      <div>
        <div className="wrapper">
          <div
            className="parallax-background"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
          <div className="section move-top">
            <div className="container">
              <div className="row">
                <div className="col s12 m4">
                  <img
                    src={games[activeGame].cover}
                    alt={games[activeGame].name}
                    width="100%"
                  ></img>
                </div>
                <div className="col s12 m8 white-text white-transparent">
                  <h1>{games[activeGame].name}</h1>
                  <p>{games[activeGame].summary}</p>
                  <p>Release Date: {games[activeGame].release}</p>
                  <p>Platforms: {games[activeGame].platforms}</p>
                  <p>Genre: {games[activeGame].genre}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="move-top">
          <div className="section">
            <div className="container">
              <div className="row">
                {video}
                {urls}
              </div>
            </div>
          </div>
          <PictureBox activeGame={activeGame} />
        </div>
      </div>
    );
  }
}

export default SingleGamePage;
