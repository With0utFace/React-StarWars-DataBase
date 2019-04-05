import React, { Component } from "react";
import ServerApi from "../../serverApi/server-api";
import LoadgingSpin from "../loading-spin/";

import "./one-page-list.css";

export default class OnePageList extends Component {
    requestServer = new ServerApi();

    state = {
        people: {},
        loadingData: true
    };
    componentDidMount() {
        this.loadPerons();
    }

    onPersonsLoad = people => {
        this.setState({
            people,
            loadingData: false
        });
    };

    loadPerons = () => {
        this.props.dataToShow().then(this.onPersonsLoad);
    };

    render() {
        const { people, loadingData } = this.state;
        const { generateItem } = this.props;

        const loading = loadingData ? (
            <LoadgingSpin />
        ) : (
            <PeopleList people={people} throwID={generateItem} />
        );

        return <div className="one-page-wrapper">{loading}</div>;
    }
}

class PeopleList extends Component {
    render() {
        const { throwID } = this.props;
        const person = this.props.people.map(elem => {
            return (
                <li key={elem.id} onClick={() => throwID(elem.id)}>
                    {elem.name}
                </li>
            );
        });

        return <ul className="one-page-list">{person}</ul>;
    }
}
