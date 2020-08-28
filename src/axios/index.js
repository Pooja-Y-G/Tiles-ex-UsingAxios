import React, { Component } from "react";
import AxiosConfig from "./configuratins";
import axios from "axios";
import ExampleTile from "./components";
import { Col } from "antd";

export default class AxiosExample extends Component {
  state = {
    getData: {
      [AxiosConfig.DATA_FIELD.PROFILE]: undefined,
    },
  };

  performGetCall = () => {
    axios.get(AxiosConfig.URLs.GET_ALL).then((response) =>
      this.setState({
        getData: {
          ...this.state.getData,
          [AxiosConfig.DATA_FIELD.PROFILE]: response.data,
        },
      })
    );
  };

  componentWillMount() {
    this.performGetCall();
  }

  render() {
    let DisplayTiles = (
      this.state.getData[AxiosConfig.DATA_FIELD.PROFILE] || []
    ).map((item) => {
      return (
        <Col style={{ textAlign: "center" }}>
          <ExampleTile profileData={item} />
        </Col>
      );
    });

    return <div>{DisplayTiles}</div>;
  }
}
