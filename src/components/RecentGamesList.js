import React from "react";
import games from "../utils/helpers";
import { Link } from "react-router-dom";

class RecentGamesList extends React.Component {
  render() {
    const a = games.map((game) => (
      <>
        <div className="col s2 m2 l2">
          <Link to={`/games/${game.id}`}>
            <img width="100%" src={game.cover} alt={game.id} />
          </Link>
        </div>

        <div className="container">
          <Link to={`/games/${game.id}`}>
            <div className="row">
              <div className="col s10 m10 l10">{game.name}</div>
              <div className="col s10 m10 l10">{game.release}</div>
              <div className="col s10 m10 l10">Genre = {game.genre}</div>
              <div className="col s10 m10 l10">ActiveGame = {game.id}</div>
              <div className="col s10 m10 l10">Game Id = {game.game_id}</div>
            </div>
          </Link>
        </div>
      </>
    ));
    return (
      <div>
        <section id="list" className="section scrollspy">
          <div className="container">
            <div className="row">
              <h5>Recently Released</h5>
              <p>-----------------------------</p>
              {a}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecentGamesList;
