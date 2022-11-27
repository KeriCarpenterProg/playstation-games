import React from 'react';
import { Footer } from "react-materialize";
import 'materialize-css/dist/css/materialize.min.css';

export class BottomOfPage extends React.Component {
    render() {
        return(
            <div>
                <nav>
                <Footer
                    className="Playstation 5 Games"
                    copyrights="Copyright 2024 Keri Carpenter All Rights Reserved"
                    links={
                    <ul>
                    <li><a className="grey-text text-lighten-3" 
                    href="./pages/games/games.html">
                    Link to another React App</a></li>
                    </ul>}
                    >
                    <h5 className="white-text">
                        Footer Content
                    </h5>
                    <p className="grey-text text-lighten-4">
                        <a className="grey-text text-lighten-3" 
                        href="https://kericarpenterprog.github.io/calculator-ssh-app/">
                        This is a link to a React App hosted on GH Pages in another Repo</a>
                    </p>
                </Footer>
                </nav>
            </div>
        )
    }
}

export default BottomOfPage;