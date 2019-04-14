import React, { Component } from "react";
import Loader from "../loader/loader";

const withData = (Template, getData) => {
    return class extends Component {
        state = {
            data: null
        };

        componentDidMount() {
            getData().then(data => {
                this.setState({
                    data
                });
            });
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return <Loader />;
            }

            return <Template {...this.props} data={data} />;
        }
    };
};

export default withData;
