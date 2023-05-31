import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);
    //state정의
    this.state = {
      loading: true,
      FormData: "no data",
    };
    //이후 콜백 함수를 다룰 때 bind(this)에 대해 자세히 이야기하겠습니다.
    this.handleData = this.handleData.bind(this);
    //4초 후에 handleData 함수를 호출합니다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "new data";
    const { FormData } = this.state;
    //state변경
    this.setState({
      loading: false,
      FormData: data + FormData,
    });
    //this.state.loading은 현재 true입니다.
    console.log("loading값", this.state.loading);
    //이후 호출될 render() 함수에서의 this.state.loading은 false입니다.
  }
  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능합니다. */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.FormData}</span>
      </div>
    );
  }
}

export default StateExample;
