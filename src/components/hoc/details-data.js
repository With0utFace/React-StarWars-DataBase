import React from "react";

const Data = ({ selectedItem, field, label }) => (
    <li className="details-list">
        <span className="detail-name">{label}</span>
        <span>{selectedItem[field]}</span>
    </li>
);

export default Data;
