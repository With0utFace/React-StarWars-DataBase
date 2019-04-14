import React, { Component } from "react";

import { PeopleList } from "../swdb-components/elements-lists";

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
                <PeopleList clicked={this.setID} />
            </div>
        );
    }
}
