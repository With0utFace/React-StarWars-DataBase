import React from "react";
import ElementsInfo from "../elements/elements-info/elements-info";
import Data from "../hoc/details-data";

const StarshipDetails = props => {
    return (
        <ElementsInfo {...props}>
            <Data field="price" label="Price" />
            <Data field="length" label="Length" />
            <Data field="model" label="Model" />
            <Data field="manufacturer" label="Manufacturer" />
            <Data field="shipClass" label="Class" />
        </ElementsInfo>
    );
};

export default StarshipDetails;
