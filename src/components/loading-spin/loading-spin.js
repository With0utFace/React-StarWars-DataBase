import React, { Component } from "react";

import "./loading-spin.css";

export default class LoadingSping extends Component {
    render() {
        return (
            <div className="lds-css ng-scope">
                <div className="lds-disk">
                    <div>
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        );
    }
}
