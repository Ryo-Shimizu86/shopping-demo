import React, { Component } from "react";
import "./App.css";
import { StaffTable } from "./components/StaffTable";
import { StaffForm } from "./components/StaffForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StaffTable staffs={this.state.staffs} />} />
          <Route path="/add" element={<StaffForm />} />
          {/* <div className="App">
            <h1 className="title">Staff List 2022</h1>
            <StaffTable staffs={this.state.staffs} />
            <StaffForm />
          </div> */}
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
