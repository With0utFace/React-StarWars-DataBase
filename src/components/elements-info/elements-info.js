import React, { Component } from "react";
import Loader from "../loader/";
import ServerApi from "../../serverApi/server-api";

import "./elements-info.css";

export default class ElementsInfo extends Component {
    ServerApi = new ServerApi();

    state = {
        selectedItem: null,
        loadingData: true
    };

    componentDidMount() {
        this.upadteInfo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.setState({ loadingData: true });
            this.upadteInfo();
        }
    }

    upadteInfo() {
        const { selectedId } = this.props;
        if (!selectedId) {
            return;
        }

        this.ServerApi.getOnePlanet(selectedId).then(element => {
            this.setState({ selectedItem: element, loadingData: false });
        });
    }
    render() {
        if (!this.state.selectedItem) {
            return (
                <div className="no-items-selected">
                    <span> Chose one element</span>
                </div>
            );
        }

        const { loadingData } = this.state;

        const loadedComp = loadingData ? (
            <Loader />
        ) : (
            <ElementInfo selectedItem={this.state.selectedItem} />
        );

        return <div className="one-page-info">{loadedComp}</div>;
    }
}

class ElementInfo extends Component {
    render() {
        const {
            id,
            name,
            diameter,
            climate,
            population,
            rotationPeriod,
            terrain
        } = this.props.selectedItem;

        return (
            <React.Fragment>
                <div className="planet-image">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        alt="planet"
                    />
                </div>
                <div className="item-name">{name}</div>
                <ul className="random-planet">
                    <li>Climate: {climate}</li>
                    <li>Diamtere: {diameter}</li>
                    <li>Population {population}</li>
                    <li>Rotation period: {rotationPeriod}</li>
                    <li>Terrain: {terrain}</li>
                </ul>
            </React.Fragment>
        );
    }
}
