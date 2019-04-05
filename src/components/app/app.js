import React, { Component } from "react";
import ServerApi from "../../serverApi/server-api";
import RandomPlanet from "../random-planet/";
import ElementsList from "../elements-list/";
import ElementsInfo from "../elements-info";

import "./app.css";

export default class App extends Component {
    ServerApi = new ServerApi();

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
                <ElementsList
                    dataToShow={this.ServerApi.getPlanetsList}
                    generateItem={this.handleID}
                />
                <ElementsInfo
                    dataToShow={this.ServerApi.getPlanetsList}
                    selectedId={this.state.selectedId}
                />
            </div>
        );
    }
}
