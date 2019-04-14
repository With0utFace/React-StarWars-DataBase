import React from "react";
import ElementsInfo from "../elements/elements-info/elements-info";
import Data from "../hoc/details-data";

const PlanetDetails = props => {
    return (
        <ElementsInfo {...props}>
            <Data field="climate" label="Climate" />
            <Data field="diameter" label="Diameter" />
            <Data field="population" label="Population" />
            <Data field="rotationPeriod" label="Rotation Period" />
            <Data field="terrain" label="Terrain" />
        </ElementsInfo>
    );
};

export default PlanetDetails;
