import React, { Component } from "react";

class Multinode extends Component {
  render() {
    return [1, 2, 3].map((num) => (
      <input
        type="radio"
        name="option1"
        key={`${num}`}
        value={num}
        label={`${num}개`}
      />
    ));
  }
}

export default Multinode;
