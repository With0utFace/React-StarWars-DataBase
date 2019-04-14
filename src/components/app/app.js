import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../header/header";
import pageTitle from "../app-title/page-title";
import RandomPlanet from "../random-planet/random-planet";

import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";
import VehiclesPage from "../pages/vehicles-page";

import PersonDetails from "../swdb-components/person-info";
import PlanetsDetails from "../swdb-components/planet-info";
import StarshipDetails from "../swdb-components/starship-info";
import VehicleDetails from "../swdb-components/vehicle-info";

import "./app.css";

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Header />
            <RandomPlanet />
            <Route path="/" component={pageTitle} exact />

            <Route exact path="/people/" component={PeoplePage} />
            <Route
                path="/people/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <PersonDetails elemID={id} url={"person"} />;
                }}
            />

            <Route exact path="/planets/" component={PlanetsPage} />
            <Route
                path="/planets/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <PlanetsDetails elemID={id} url={"planet"} />;
                }}
            />

            <Route exact path="/starships/" component={StarshipsPage} />
            <Route
                path="/starships/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails elemID={id} url={"starship"} />;
                }}
            />

            <Route exact path="/vehicles/" component={VehiclesPage} />
            <Route
                path="/vehicles/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <VehicleDetails elemID={id} url={"vehicle"} />;
                }}
            />
        </div>
    </BrowserRouter>
);

export default App;
