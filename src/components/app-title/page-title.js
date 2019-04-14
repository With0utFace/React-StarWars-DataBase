import React from "react";

import "./page-title.css";

const PageTitle = () => (
    <div className="page-title">
        <h2>Welcome to StarWars DataBase</h2>
        <p>
            This is a small project made with
            <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer noopener"
            >
                React
            </a>
        </p>
        <p>
            API with all data about Star wars is
            <a
                href="https://swapi.co/"
                target="_blank"
                rel="noreferrer noopener"
            >
                Swapi
            </a>
        </p>
        <p>
            there is no error handler atm, so if something insn't working, try
            to restart page
        </p>
    </div>
);

export default PageTitle;
