import React, { Component } from "react";
import PropsTypes from "prop-types";

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } =
      this.props;

    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>객체값: {objValue}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {funcValue}</span>
      </div>
    );
  }
}

ChildComponent.PropsTypes = {
  boolValue: PropsTypes.bool,
  numValue: PropsTypes.number,
  arrayValue: PropsTypes.arrayOf(PropsTypes.number),
  objValue: PropsTypes.object,
  nodeValue: PropsTypes.node,
  funcValue: PropsTypes.func,
};

export default ChildComponent;
