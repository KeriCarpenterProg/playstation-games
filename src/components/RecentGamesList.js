import React from "react";
import games from "../utils/helpers";
import { Link } from "react-router-dom";

class RecentGamesList extends React.Component {
  render() {
    const a = games.map((game) => (
      <>
        <div className="col s2 m2 l2">
          <img width="100%" src={game.cover} alt={game.id} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col s10 m10 l10">{game.name}</div>
            <div className="col s10 m10 l10">{game.release}</div>
            <div className="col s10 m10 l10">{game.genre}</div>
            <div className="col s10 m10 l10">Game Id = {game.game_id}</div>
          </div>
        </div>
      </>
    ));
    return (
      <div>
        <section id="list" className="section scrollspy">
          <div className="container">
            <div className="row">
              <h5>Recently Released</h5>
              <p>---------------</p>
              <div className="col s2 m2 l2">
                <img width="100%" src={games[1].cover} alt={games[1].id} />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col s10 m10 l10">{games[1].name}</div>
                  <div className="col s10 m10 l10">{games[1].release}</div>
                  <div className="col s10 m10 l10">{games[1].genre}</div>
                  <div className="col s10 m10 l10">
                    Game Id = {games[1].game_id}
                  </div>
                </div>
              </div>
              {a}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RecentGamesList;
