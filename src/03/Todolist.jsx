import React, { Component } from "react";

class Todolist extends Component {
  render() {
    const todoList = [
      { taskName: "게임하기", finished: false },
      { taskName: "코딩하기", finished: true },
    ];
    return (
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
