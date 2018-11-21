import React, { Component } from "react";

class ComponenteA extends Component {
  render() {
    return <p>Component A</p>;
  }
}

class ComponenteB extends Component {
  render() {
    return <p>Component B</p>;
  }
}

export default class ConditionalSection extends Component {
  constructor() {
    super();
    this.state = { mostrarA: true };
  }

  render() {
    return (
      <div>
        <h4>Conditional Rendering</h4>
        this.state.mostrarA ? (
        <ComponenteA />
        ) : (
        <ComponenteB />
        );
      </div>
    );
  }
}
