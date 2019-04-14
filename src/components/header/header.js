import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const header = () => (
    <ul className="header-links">
        <li className="page-title">
            <Link to="/">StarWars DataBase</Link>
        </li>
        <li>
            <Link to="/people/">People</Link>
        </li>
        <li>
            <Link to="/planets/">Planets</Link>
        </li>
        <li>
            <Link to="/starships/">Starships</Link>
        </li>
        <li>
            <Link to="/vehicles/">Vehicles</Link>
        </li>
    </ul>
);

export default header;
