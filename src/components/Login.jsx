import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./styles/Login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleErrorMessage = () => {
    if (this.props.fiedsEmpty) {
      return <div className="error">Please fill the fields first!</div>;
    }
    if (this.props.errorMessage !== "") {
      return <div className="error">{this.props.errorMessage}</div>;
    } else {
      return null;
    }
  };
  render() {
    const customStyle = { textAlign: "center" };
    return (
      <div className="login">
        <h2 style={{ customStyle }}>Login Page</h2>
        {this.handleErrorMessage()}

        <Form onSubmit={this.props.handleFormSubmit}>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail">Email</Label>
          </FormGroup>{" "}
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">Password</Label>
          </FormGroup>{" "}
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
