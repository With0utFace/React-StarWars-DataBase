import React, { Component } from "react";
import ServerApi from "../../serverApi/server-api";

export default class RandomPlanet extends Component {
    requestServer = new ServerApi();

    state = {
        planet: {}
    };

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetLoad = planet => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = 4;
        this.requestServer.getOnePlanet(id).then(this.onPlanetLoad);
    }

    render() {
        const {
            planet: {
                name,
                climate,
                diameter,
                population,
                rotationPeriod,
                terrain,
                films
            }
        } = this.state;
        return (
            <div>
                <ul>
                    <li>Name: {name}</li>
                    <li>Climate: {climate}</li>
                    <li>Diamtere: {diameter}</li>
                    <li>Population {population}</li>
                    <li>Rotation period: {rotationPeriod}</li>
                    <li>Terrain: {terrain}</li>
                </ul>
            </div>
        );
    }
}
