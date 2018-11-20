import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// function Hello(props) {
//   return <h2>Welcom to React with a prop: {props.title}</h2>;
// }

// const Hello = props => <h2>Hello with props: {props.title}</h2>;

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      boolean,
      multply,
      objectWithInfo,
      number,
      text,
      title
    } = this.props;

    const textoSegunBool = boolean ? "Cierto" : "Falso";
    const mappedNumbers = arrayOfNumbers.map(multply);

    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{objectWithInfo.key}</p>
        <p>{objectWithInfo.key2}</p>
        {title}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bienvenidos hijos del rock and roll!!!</p>

          <Hello title="React rules!!" />

          <Text
            arrayOfNumbers={[2, 3, 4]}
            boolean={true}
            objectWithInfo={{ key: "value", key2: "other value" }}
            multply={number => number * 10}
            number={10}
            text="Text 2"
            title={<h1>Title H1</h1>}
          />
        </header>
      </div>
    );
  }
}

export default App;
