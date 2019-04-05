import React, { Component } from "react";
import Loader from "../loader/";

import "./elements-list.css";

export default class ElementsList extends Component {
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
            <Loader />
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
