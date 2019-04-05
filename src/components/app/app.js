import React, { Component } from "react";
import ServerApi from "../../serverApi/server-api";
import RandomPlanet from "../random-planet/";
import OnePageList from "../one-page-list/";
import OnePageInfo from "../one-page-info";

import "./app.css";

export default class App extends Component {
    requestServer = new ServerApi();

    state = {
        selectedId: null
    };

    handleID = element => {
        this.setState({ selectedId: element });
    };

    render() {
        return (
            <div className="app">
                <RandomPlanet />
                <OnePageList
                    dataToShow={this.requestServer.getPlanetsList}
                    generateItem={this.handleID}
                />
                <OnePageInfo
                    dataToShow={this.requestServer.getPlanetsList}
                    selectedId={this.state.selectedId}
                />
            </div>
        );
    }
}
