import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolBar from "react-bootstrap/ButtonToolbar";

export default class Main extends Component {
  state = {};
  render() {
    return (
      <ButtonToolBar>
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
      </ButtonToolBar>
    );
  }
}