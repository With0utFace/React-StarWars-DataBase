import React from "react";
import ElementsInfo from "../elements/elements-info/elements-info";
import Data from "../hoc/details-data";

const VehicleDetails = props => {
    return (
        <ElementsInfo {...props}>
            <Data field="price" label="Price" />
            <Data field="length" label="Length" />
            <Data field="model" label="Model" />
            <Data field="maxSpeed" label="Max Speed" />
            <Data field="capacity" label="Capacity" />
        </ElementsInfo>
    );
};

export default VehicleDetails;
