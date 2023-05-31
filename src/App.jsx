import React, { Component } from "react";
import Todolist from "./03/Todolist";
import Multinode from "./03/Multinode";

class App extends Component {
  render() {
    return (
      <div>
        <Todolist />
        <Multinode />
      </div>
    );
  }
}

export default App;
