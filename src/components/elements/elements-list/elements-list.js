import React from "react";

import { Link } from "react-router-dom";

import "./elements-list.css";

const ElementsList = props => {
    const { clicked } = props;
    const person = props.data.map(elem => {
        return (
            <li key={elem.id} onClick={() => clicked(elem.id)}>
                <Link to={`${window.location.pathname}${elem.id}`}>
                    <img src={elem.image} alt="" />
                    {elem.name}
                </Link>
            </li>
        );
    });

    return <ul className="one-element-list">{person}</ul>;
};

export default ElementsList;
