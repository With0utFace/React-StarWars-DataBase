import React, { Component } from "react";
import Loader from "../../loader/loader";
import ServerApi from "../../../serverApi/server-api";

import "./elements-info.css";

export default class ElementsInfo extends Component {
    ServerApi = new ServerApi();

    state = {
        selectedItem: null
    };

    componentDidMount() {
        this.upadteInfo();
    }

    componentDidUpdate(prevProps) {
        if (this.props.elemID !== prevProps.elemID) {
            this.setState({ loadingData: true });
            this.upadteInfo();
        }
    }

    upadteInfo() {
        const { elemID, url } = this.props;
        if (!elemID) {
            return;
        }

        this.ServerApi.get(url, elemID).then(element => {
            this.setState({ selectedItem: element, loadingData: false });
        });
    }
    render() {
        const { selectedItem } = this.state;

        if (!selectedItem) {
            return <Loader />;
        }

        return (
            <div className="one-page-info">
                <div className="info-image">
                    <img src={selectedItem.image} alt="planet" />
                </div>
                <div className="info-wrapper">
                    <div className="item-name">{selectedItem.name}</div>
                    <ul className="info-list">
                        {React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, { selectedItem });
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
