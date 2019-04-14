import React from "react";
import ElementsInfo from "../elements/elements-info/elements-info";
import Data from "../hoc/details-data";

const PersonDetails = props => {
    return (
        <ElementsInfo {...props}>
            <Data field="gender" label="Gender" />
            <Data field="birthYear" label="Birth Year" />
            <Data field="skinColor" label="Skin Color" />
            <Data field="height" label="Height" />
        </ElementsInfo>
    );
};

export default PersonDetails;
