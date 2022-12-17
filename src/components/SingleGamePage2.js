import React from "react";
import { useParams } from "react-router-dom";
import games from "../utils/helpers";
import PictureBox from "./PictureBox";

export function SingleGamePage2() {
  const { activeGame } = useParams();
  const backgroundImage = games[activeGame].screenshots[0];
  const a = games[activeGame].screenshots;
  const screenshots = a.map((screenshot, index) => (
    <div className="col s12 m4" key={index}>
      <img src={screenshot} alt={screenshot} width="100%" />
    </div>
  ));
  const b = games[activeGame].videos;
  const videos = b.map((value, index) => (
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
              {videos}
              {screenshots}
            </div>
          </div>
        </div>
        <PictureBox activeGame={activeGame} />
      </div>
    </div>
  );
}
