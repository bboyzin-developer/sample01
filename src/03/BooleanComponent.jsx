import React, { Component } from "react";

class BooleanComponent extends Component {
  render() {
    //불리언 타입을 조건문에 적용한 예제
    const message = this.props.answer
      ? "놀러가자"
      : "하던 일 열심히 마무리하자";
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;
