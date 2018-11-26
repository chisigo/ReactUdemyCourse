import React, { Component } from "react";
import "./App.css";
import FetchExample from "./sections/fetch-example";

class Button extends Component {
  constructor(props) {
    super(props);
    this.borderBolor = "#09f";
  }

  render() {
    return (
      <button style={{ borderColor: this.borderBolor, display: "block" }}>
        {this.props.label}
      </button>
    );
  }
}

class ButtonDanger extends Button {
  constructor(props) {
    super(props);
    this.borderBolor = "red";
  }
}

class ButtonLegend extends Button {
  render() {
    return (
      <div>
        {super.render()} <small>{this.props.legend}</small>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Composición vs herencia</h4>

        <Button label="Click aquí" />
        <br />
        <ButtonDanger label="Error" />
        <br />
        <ButtonLegend label="Leyenda" legend="Explicación botón" />
      </div>
    );
  }
}

export default App;
