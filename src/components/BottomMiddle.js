import React from "react";
import "materialize-css/dist/css/materialize.min.css";

export class BottomMiddle extends React.Component {
  render() {
    return (
      <div>
        <section
          id="carousel"
          className="section red lighten-1 white-text scrollspy"
        >
          <div className="container">
            <div className="row">
              <h5>I want this to be left aligned</h5>

              <div className="col s12">
                This div is 12-columns wide on all screen sizes
              </div>
              <div className="col s6">
                6-columns (one-half). Lorem Ipsum dolor et alignment. The quick
                brown fox jumped over the lazy dog. This quick brown fox jumped
                over the lazy dog.
              </div>
              <div className="col s6">
                6-columns (one-half). Lorem Ipsum dolor et alignment. The quick
                brown fox jumped over the lazy dog. This quick brown fox jumped
                over the lazy dog.
              </div>
            </div>
          </div>
        </section>
        <section
          id="pictures"
          className="section green darken-2 white-text scrollspy"
        >
          <div className="container">
            <div className="row">
              <h5>Is this a new container?</h5>
              <div className="col s6">This should cover 6 columns</div>
              <div className="col s6">This should cover 6 columns</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BottomMiddle;
