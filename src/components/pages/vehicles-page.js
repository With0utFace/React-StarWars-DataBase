import React, { Component } from "react";

import { VehiclesList } from "../swdb-components/elements-lists";

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    };

    setID = id => {
        this.setState({ selectedItem: id });
    };

    render() {
        return (
            <div className="list-wrapper">
                <VehiclesList clicked={this.setID} />
            </div>
        );
    }
}
