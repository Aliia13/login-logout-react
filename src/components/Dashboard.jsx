import React, { Component } from "react";
import { Button } from "reactstrap";
import "./styles/Dashboard.css";
import Login from "./Login";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard Page</h2>
        <p>Dear {this.props.userName}, welcome to your dashboard.</p>
        <Button onClick={this.props.handleLogout}>Logout</Button>
      </div>
    );
  }
}
