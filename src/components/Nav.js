import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import games from "../utils/helpers";

export function Nav() {
  const [gameLinks, setGameLinks] = useState([]);
  console.log(games);
  useEffect(() => {
    setGameLinks(games);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Popular Playstation 5 Games
          </a>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Games List
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {gameLinks.map((d, i) => (
                <li key={i}>
                  <Link to={`/games/${d.id}`}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
