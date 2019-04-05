import React, { Component } from "react";
import ServerApi from "../../serverApi/server-api";
import LoadgingSpin from "../loading-spin/";

import "./random-planet.css";

export default class RandomPlanet extends Component {
    requestServer = new ServerApi();

    state = {
        planet: {},
        loadingData: true
    };

    componentDidMount() {
        this.updatePlanet();
        setInterval(() => {
            this.updatePlanet();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.updatePlanet);
    }

    onPlanetLoad = planet => {
        this.setState({
            planet,
            loadingData: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 11) + 2;
        this.requestServer.getOnePlanet(id).then(this.onPlanetLoad);
    }

    render() {
        const loading = this.state.loadingData ? (
            <LoadgingSpin />
        ) : (
            <PlanetInfo planet={this.state.planet} />
        );
        return <div className="random-planet-wrapper">{loading}</div>;
    }
}

const PlanetInfo = ({ planet }) => {
    const {
        id,
        name,
        climate,
        diameter,
        population,
        rotationPeriod,
        terrain
    } = planet;
    return (
        <React.Fragment>
            <div className="planet-image">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt="planet"
                />
            </div>
            <ul className="random-planet">
                <li>Name: {name}</li>
                <li>Climate: {climate}</li>
                <li>Diamtere: {diameter}</li>
                <li>Population {population}</li>
                <li>Rotation period: {rotationPeriod}</li>
                <li>Terrain: {terrain}</li>
            </ul>
        </React.Fragment>
    );
};
