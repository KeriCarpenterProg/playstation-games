import React, { Component } from "react";
import games from "../utils/helpers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slickstyle.css";

class SlickSlider extends React.Component {
  render() {
    // Slick Slider Settings ----> Begin
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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
              <h5>Popular PS5 Games right now</h5>
              <div className="slick-slider-wrapper">
                <Slider {...settings}>
                  {games.map((i) => (
                    <div className="card">
                      <img src={i.cover} alt={i.name} />
                      <p>{i.name}</p>
                    </div>
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

export default SlickSlider;
