import React, { Component } from "react";
import ServerApi from "../../serverApi/server-api";
import RandomPlanet from "../random-planet/";

import "./app.css";

export default class App extends Component {
    requestServer = new ServerApi();

    render() {
        return (
            <div>
                <RandomPlanet />
            </div>
        );
    }
}
