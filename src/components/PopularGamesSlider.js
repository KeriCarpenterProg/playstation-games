import React from "react";
import games from "../utils/helpers";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slickstyle.css";

class PopularGamesSlider extends React.Component {
  render() {
    // Slick Slider Settings ----> Begin
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    // Slick Slider Settings ----> End

    return (
      <div>
        <div className="section">
          <div className="container">
            <div className="row">
              <h5>Popular Playstation 5 Games</h5>
              <div className="slick-slider-wrapper">
                <Slider {...settings}>
                  {games.map((i, index) => (
                    <React.Fragment key={index}>
                      <Link to={`/games/${i.id}`}>
                        <div className="card" key={i}>
                          <img src={i.cover} alt={i.name} />
                          <h5>{i.name}</h5>
                        </div>
                      </Link>
                    </React.Fragment>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularGamesSlider;
