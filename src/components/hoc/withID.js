import React, { Component } from "react";

const withid = Wrapped => {
    return class extends Component {
        state = {
            selectedItem: null
        };

        setID = id => {
            this.setState({ selectedItem: id });
        };

        render() {
            return <Wrapped {...this.props} clicked={this.setID} />;
        }
    };
};

export default withid;
