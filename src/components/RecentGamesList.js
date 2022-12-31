import React from "react";
import games from "../utils/helpers";
import { Link } from "react-router-dom";

class RecentGamesList extends React.Component {
  render() {
    const a = games.map((game, index) => (
      <React.Fragment key={index}>
        <div className="col-3">
          <Link to={`/games/${game.id}`}>
            <img width="100%" src={game.cover} alt={game.id} />
          </Link>
        </div>

        <div className="col-9">
          <Link to={`/games/${game.id}`}>
            <div>{game.name}</div>
            <div>{game.release}</div>
            <div>Genre = {game.genre}</div>
            <div>ActiveGame = {game.id}</div>
            <div>Game Id = {game.game_id}</div>
          </Link>
        </div>
      </React.Fragment>
    ));
    return (
      <div>
        <section id="list" className="section scrollspy">
          <div className="container">
            <div className="row">
              <h5>Recently Released</h5>
              <hr></hr>
              {a}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecentGamesList;
