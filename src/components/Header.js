import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Navbar, NavItem } from "react-materialize";
import DropDown from "./Dropdown";

class Header extends Component {
  render() {
    const { activeGame } = this.props;
    const { clickEvent } = this.props;
    return (
      <div>
        <Navbar
          className="grey darken-1"
          centerLogo={true}
          alignLinks="right"
          brand={
            <div className="brand-logo">
              <Link to="/">Playstation Games</Link>
            </div>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
          sidenav={
            <div>
              <li>Choose List of Games or View Single Game</li>
              {/* This was the button to load data.  I took it out
              because I am now loading in componentDidMount on load */}
              {/* <li><FetchGameData /></li> */}
              <li>
                <Link to="/">Top Playstation Games</Link>
              </li>
              <li>
                <Link to="/games">Single PS5 Game</Link>
              </li>
              <li>
                <DropDown activeGame={activeGame} clickEvent={clickEvent} />
              </li>
              <li>Recent Releases ToDo</li>

              <li>Login with Twitch ToDo</li>
            </div>
          }
        >
          <NavItem>
            <Link to="/games">Game</Link>
          </NavItem>
          <NavItem>
            <DropDown currentIndex={activeGame} clickEvent={clickEvent} />
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Header;
