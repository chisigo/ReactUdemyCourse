import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5, 6];

    return (
      <div className="App">
        <h4>Trabajando don listas</h4>

        {numbers.map((n, index) => {
          return <p key={index}>Soy el número {n}</p>;
        })}
      </div>
    );
  }
}

export default App;
