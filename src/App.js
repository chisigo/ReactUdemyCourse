import React, { Component } from "react";
import "./App.css";

class Button extends Component {
  render() {
    return (
      <button style={{ borderColor: this.props.borderColor, display: "block" }}>
        {this.props.label}
      </button>
    );
  }
}

Button.defaultProps = {
  borderColor: "blue"
};

class ButtonDanger extends Component {
  render() {
    return <Button borderColor="red" label={this.props.label} />;
  }
}

class ButtonLegend extends Component {
  render() {
    return (
      <div>
        <Button label={this.props.label} borderBolor={this.props.borderColor} />
        <small>{this.props.legend}</small>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Composición vs herencia</h4>

        <Button label="Click aquí con composición" />
        <br />
        <ButtonDanger label="Error con composición" />
        <br />
        <ButtonLegend
          label="Leyenda con composición"
          legend="Explicación botón con composición"
        />
      </div>
    );
  }
}

export default App;
