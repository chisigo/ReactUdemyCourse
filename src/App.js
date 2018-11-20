import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Title.defaultProps = {
  text: "Hola"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Adeu" />
      </div>
    );
  }
}

export default App;
