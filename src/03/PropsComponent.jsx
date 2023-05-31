import React, { Component } from "react";
import PropsTypes from "props-types";

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

//자료형을 선언하는 예제
PropsComponent.PropsTypes = {
  name: PropsTypes.string,
};

export default PropsComponent;
