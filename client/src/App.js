import React, { Component } from "react";
import "./App.css";
import { StaffTable } from "./components/StaffTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { staffs: [] };
  }

  callAPI() {
    fetch("http://localhost:9000/staffs/list")
      .then((res) => res.json())
      .then((res) => this.setState({ staffs: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Staff List 2022</h1>
        <StaffTable staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
