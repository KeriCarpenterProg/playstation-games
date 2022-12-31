import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import games from "../utils/helpers";

export function Nav() {
  const [gameLinks, setGameLinks] = useState([]);
  useEffect(() => {
    setGameLinks(games);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Popular Playstation 5 Games
          </a>
          <div className="btn-group">
            <button
              type="button"
              className="btn bg-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Games List
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
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
